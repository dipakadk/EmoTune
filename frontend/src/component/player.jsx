import React from 'react';

const Player = ({ musicList }) => {
  if (!musicList || musicList.length === 0) {
    return (
      <p className="text-white text-center italic">
        No music recommendations yet! Your detected emotion will suggest songs here.
      </p>
    );
  }

  return (
    <div className="text-white">
      <h3 className="text-lg font-bold mb-2 underline">Recommended Songs:</h3>
      <ul className="list-disc list-inside space-y-2">
        {musicList.map((track, index) => (
          <li key={index} className="mb-1">
            <strong>{track.title}</strong> 
            {track.artist && (
              <span className="italic text-gray-300"> by {track.artist}</span>
            )}
            {track.url && (
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-400 underline"
              >
                Listen
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Player;
