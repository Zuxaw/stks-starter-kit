import { useState } from 'react';


const Post = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <div className="card card-compact w-full h-96 mt-5 bg-base-100 shadow-xl border border-base-300">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <img
          src="https://placeimg.com/400/225/arch"
          className="h-52 mt-2 rounded-lg"
          onClick={handleImageClick}
          style={{ objectFit: 'cover' }}
        />
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <i className="fas fa-heart mr-2" />
            Like
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-paper-plane mr-2" />
            Share
          </button>
          <button className="btn btn-primary">
            <i className="fa-solid fa-comment mr-2"></i>
            Comments
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
