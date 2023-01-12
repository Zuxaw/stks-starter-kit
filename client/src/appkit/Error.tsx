import { useNavigate } from 'react-router-dom';

const Error: React.FC<{ error: string }> = ({ error }) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center mt-52'>
      <div className="modal-box border border-base-300">
        <h3 className="font-bold text-lg text-error">Error!</h3>
        <p className="py-4">{error}</p>
        <div className="modal-action">
          <button className="btn" onClick={() => navigate('/')}>
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
