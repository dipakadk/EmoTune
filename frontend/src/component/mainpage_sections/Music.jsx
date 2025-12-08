export const Music = ({ imageUrl, youtubeUrl }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-auto aspect-video bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
      </a>
    </div>
  );
};
