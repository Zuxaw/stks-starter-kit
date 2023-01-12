import { PuffLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PuffLoader color="#00BFFF" size={150} />
    </div>
  );
};

export default Loading;
