// src/pages/index.tsx
import { GetServerSideProps } from 'next';
import { useMemo, useState } from 'react';
import path from 'path';
import fs from 'fs';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import GameCard from '../components/GameCard';

interface Game {
  id: string;
  name: string;
  provider: string;
  content: {
    thumbnail: {
      url: string;
      altText: string;
    };
  };
}

interface Props {
  games: Game[];
}

const Home = ({ games }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');

  const providers = useMemo(() => {
    return Array.from(new Set(games.map((game) => game.provider)));
  }, [games]);

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvider = selectedProvider ? game.provider === selectedProvider : true;
    return matchesSearch && matchesProvider;
  });

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Casino Games Lobby</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter
        selectedProvider={selectedProvider}
        setSelectedProvider={setSelectedProvider}
        providers={providers}
      />

      <div className="games-grid">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              provider={game.provider}
              thumbnailUrl={game.content.thumbnail.url}
              thumbnailAlt={game.content.thumbnail.altText}
            />
          ))
        ) : (
          <p>No games found.</p>
        )}
      </div>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const filePath = path.join(process.cwd(), 'games.json'); // Adjusted path
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const games = JSON.parse(fileContent);

  return {
    props: {
      games,
    },
  };
};

export default Home;
