import React, { createContext, useContext, useState, ReactNode } from 'react';

type Song = {
  id: number;
  title: string;
  description: string;
  time: number;
  imageUrl: string;
  count: string;
};

type MusicPlayerContextType = {
  currentSong: Song | null;
  isPlayerVisible: boolean;
  setCurrentSong: (song: Song | null) => void;
  setIsPlayerVisible: (visible: boolean) => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  return (
    <MusicPlayerContext.Provider
      value={{ currentSong, isPlayerVisible, setCurrentSong, setIsPlayerVisible }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};
