'use client';

import React from 'react';

interface FilterProps {
  selectedProvider: string;
  setSelectedProvider: (value: string) => void;
  providers: string[];
}

export default function FilterBar({
  selectedProvider,
  setSelectedProvider,
  providers,
}: FilterProps) {
  return (
    <div className="filter-bar-wrapper">
  
      <select
        id="provider-filter"
        value={selectedProvider}
        onChange={(e) => setSelectedProvider(e.target.value)}
        aria-label="Select game provider"
        className="filter-select"
      >
        <option value="">All Providers</option>
        {providers.map((provider) => (
          <option key={provider} value={provider}>
            {provider}
          </option>
        ))}
      </select>
    </div>
  );
}