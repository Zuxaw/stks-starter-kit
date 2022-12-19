import firebase from 'firebase/app';
import 'firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useQuery } from 'react-query';
import { getUser, useAuth } from '~/lib/firebase';

const UserIcon = () => {    
    const { data, isLoading } = useQuery<User | null, Error>('user', getUser);
  
    return ( 
        <div>
            <div className="avatar">
                <div className="w-10 rounded-full">
                    { !data?.photoURL || isLoading ? <img src={'https://static.wikia.nocookie.net/onepiece/images/7/7f/Monkey_D._Luffy_Anime_Post_Ellipse_Infobox.png/revision/latest/scale-to-width-down/270?cb=20170617172443&path-prefix=fr'} alt="user" /> 
                    : <img src={data?.photoURL} />}
                </div>
            </div>
        </div>
     );
}
 
export default UserIcon;