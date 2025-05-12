'use client';

import { useMemo, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import GameCard from './components/GameCard';

// Fetching Games
import gamesDataImport from './games.json';

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

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [gamesData, setGamesData] = useState<Game[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch the games data with error handling
  useEffect(() => {
    try {
      const data = gamesDataImport as Game[];
      setGamesData(data);
    } catch (err) {
      setError('Failed to load games data');
      console.error('Error loading games data:', err);
    }
  }, []);

  const providers = useMemo(() => {
    if (!gamesData) return [];
    return Array.from(new Set(gamesData.map((game: Game) => game.provider)));
  }, [gamesData]);

  const filteredGames = useMemo(() => {
    if (!gamesData) return [];
    return gamesData.filter((game: Game) => {
      const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesProvider = selectedProvider ? game.provider === selectedProvider : true;
      return matchesSearch && matchesProvider;
    });
  }, [gamesData, searchTerm, selectedProvider]);

  if (error) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Casino Games Lobby</h1>
        <p style={{ color: 'red' }}>Error: {error}</p>
      </main>
    );
  }

  if (!gamesData) {
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Casino Games Lobby</h1>
        <p>Loading games...</p>
      </main>
    );
  }

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
          filteredGames.map((game: Game) => (
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

export default Home;
