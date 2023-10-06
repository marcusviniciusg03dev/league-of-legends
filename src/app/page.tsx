import Champion from './components/champion'

export default function Home() {
  const champions = [
    {
      name: 'Jinx',
      label: 'O gatilho desenfreado'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Champion
        name={champions[0].name}
        label={champions[0].label}
      />
    </main>
  )
}
