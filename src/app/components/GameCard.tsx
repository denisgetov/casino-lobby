'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GameCardProps {
  id: string;
  name: string;
  provider: string;
  thumbnailUrl: string;
  thumbnailAlt?: string; 
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  provider,
  thumbnailUrl,
  thumbnailAlt, 
}) => {
  const [isImageError, setIsImageError] = useState(false);

  const altText = thumbnailAlt || `Thumbnail for ${name} game by ${provider}`;

  return (
    <div 
      className="game-card group cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out"
      aria-label={`Game: ${name} by ${provider}`}
    >
      {!isImageError ? (
        <Image
          src={thumbnailUrl}
          alt={altText} 
          width={300}
          height={200}
          className="w-full h-48 object-cover"
          onError={() => setIsImageError(true)}
          priority={false}
        />
      ) : (
        <div 
          className="w-full h-48 bg-gray-200 flex items-center justify-center"
          aria-label={altText} 
        >
          Image Not Available
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{provider}</p>
      </div>
    </div>
  );
};

export default GameCard;