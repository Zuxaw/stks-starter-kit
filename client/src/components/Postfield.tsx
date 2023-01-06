const Postfield = () => {
  return (
    <div className="w-full flex text-3xl font-bold">
      <input type="text" placeholder="What's news ?" className="input input-bordered w-full max-w-xs" />
      <button className="btn gap-2 ml-2">
        <i className="fas fa-paper-plane" />
        Send
      </button>
    </div>
  );
};

export default Postfield;
