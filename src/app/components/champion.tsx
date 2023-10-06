interface ChampionProps {
    name: string
    label: string
}

export default function Champion({ name, label }: ChampionProps) {
    return (
        <div className="h-full w-full flex flex-col">
            <span className="flex justify-center flex-1">
                <h1 className="uppercase font-heading text-[clamp(100px,_24vw,_800px)] text-background-image bg-letter-2 bg-cover bg-no-repeat bg-[70%_100px]">
                    {name}
                </h1>
            </span>
            <h2 className="text-4xl text-yellow-600 p-16">
                {label}
            </h2>
        </div>
    );
}