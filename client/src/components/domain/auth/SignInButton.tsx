import { useMutation } from '@apollo/client';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '~/lib/firebase';
import { addUserMutation } from '~/queries/queries';

export const SignInButton = () => {
  const navigate = useNavigate();
  const [addUser] = useMutation(addUserMutation);
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = 'fr';
    //with redirect method
    await signInWithPopup(auth, provider);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/home');
        // mutation addUser appollo
        addUser({
          variables: {
            uid: user.uid,
            email: user.email,
            profilePicture: user?.photoURL,
          },
        });
      }
    });
  };

  return (
    <button onClick={handleClick} type="button" className="btn btn-primary normal-case min-w-60">
      Sign In With Google
    </button>
  );
};
