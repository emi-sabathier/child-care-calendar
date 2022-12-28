import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            setTimeout(async () => {
                try {
                    const res = await fetch(url);
                    const resToJson = await res.json();
                    if (resToJson.records.length > 0) {
                        setData(resToJson.records);
                        setIsLoading(false);
                    }
                } catch (e) {
                    if (e instanceof Error) {
                        throw new Error(e.message);
                    }
                }
            }, 2000);
        })();
    }, []);

    return {
        isLoading,
        data,
    };
};
