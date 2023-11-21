import { useState, useEffect } from 'react'

const useChampions = () => {
    const [champions, setChampions] = useState<IChampion[]>([]);
    const [loading, setLoading] = useState(true);
    
    const getChampions = async () => {
        if (!loading) {
            setLoading(true);
        }

        const response = await fetch('/api/champions', {
            headers: {
                'Accept': 'application/json',
            }
        });

        if (response.ok) {
            const { data } = await response.json();
            setChampions(data);
            setLoading(false);
        }

        setLoading(false);
    };

    useEffect(() => {
        getChampions();
    }, [])

    return {
        champions,
        loading
    }
};

export default useChampions;