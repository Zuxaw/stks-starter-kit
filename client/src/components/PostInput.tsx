import { useState } from 'react';

const Postfield = () => {
  //upload image
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  //On click open file to select image
  const handleImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.click();

    input.onchange = () => {
      const files = input.files;
      if (files && files.length > 0 && images.length + files.length <= 4) {
        setImages([...images, ...files]);
        setPreviews([
          ...previews,
          ...Array.from(files).map((file: File) => URL.createObjectURL(file)),
        ]);
      }
    };
  };

  // remove image
  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div className="w-full flex text-3xl font-bold">
        <input type="text" placeholder="What's news ?" className="input input-bordered w-full max-w-xs" />
        <button className="btn gap-2 ml-2" onClick={handleImageClick} disabled={previews.length>=4}>
          <i className="fas fa-upload" />
        </button>
        <button className="btn gap-2 ml-2">
          <i className="fas fa-paper-plane" />
          Send
        </button>
      </div>
      {previews.length > 0 && (
        <div className="flex mt-5 rounded-xl shadow-xl border border-base-300 overflow-y-auto">
          {previews.map((preview, index) => (
            <div className="relative m-5" key={index}>
              {/* img crop center */}
              <img src={preview} className="w-52 h-52 rounded-lg object-cover" />
              <button className="absolute top-2 right-2" onClick={() => handleRemoveImage(index)}>
                <i
                  className="fas fa-trash text-primary-content hover:text-error shadow-lg"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Postfield;
