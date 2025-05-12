// src/components/GameCard.tsx
import React from 'react';

interface GameCardProps {
  id: string;
  name: string;
  provider: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  name,
  provider,
  thumbnailUrl,
  thumbnailAlt,
}) => {
  return (
    <div className="game-card">
      <img src={thumbnailUrl} alt={thumbnailAlt} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>{provider}</p>
    </div>
  );
};

export default GameCard;
