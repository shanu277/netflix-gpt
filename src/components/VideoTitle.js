const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-sceen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold w-1/2">{title}</h1>
      <p className="py-6  text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-lg  rounded-lg hover:bg-opacity-80">▶Play</button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-lg hover:bg-opacity-80 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
