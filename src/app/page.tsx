'use client'
import { useState } from 'react'
import Champion from './components/champion'
import useChampions from './hooks/useChampions';

export default function Home() {
  const { champions, loading } = useChampions();
  const [currentChampionIndex, setCurrentChampionIndex] = useState(0);

  const handleNextChampion = () => {
    setCurrentChampionIndex(prev => prev == champions.length - 1 ? 0 : prev + 1);
  }

  const handlePrevChampion = () => {
    setCurrentChampionIndex(prev => prev == 0 ? champions.length - 1 : prev - 1);
  }

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <strong className="text-white text-xl">Carregando...</strong>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col">
      {champions.length > 0 && (
        <Champion
          championIndex={currentChampionIndex}
          bgImageSuffix={champions[currentChampionIndex].bgImageSuffix}
          description={champions[currentChampionIndex].description}
          name={champions[currentChampionIndex].name}
          label={champions[currentChampionIndex].label}
          heroImage={champions[currentChampionIndex].heroImage}
          type={champions[currentChampionIndex].type}
          callbacks={{ handleNextChampion, handlePrevChampion }}
        />
      )}
    </main>
  )
}
