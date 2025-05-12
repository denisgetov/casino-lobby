'use client';

import React from 'react';

interface FilterProps {
  selectedProvider: string;
  setSelectedProvider: (value: string) => void;
  providers: string[];
}

export default function Filter({
  selectedProvider,
  setSelectedProvider,
  providers,
}: FilterProps) {
  return (
    <select
      value={selectedProvider}
      onChange={(e) => setSelectedProvider(e.target.value)}
      style={{
        width: '100%',
        padding: '0.8rem',
        marginBottom: '1rem',
        borderRadius: '5px',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--foreground)',
        fontSize: '1rem',
      }}
    >
      <option value="">All Providers</option>
      {providers.map((provider) => (
        <option key={provider} value={provider}>
          {provider}
        </option>
      ))}
    </select>
  );
}
