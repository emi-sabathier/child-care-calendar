import { useEffect, useState } from 'react';

export interface UseFetchDataType<T> {
    isLoading: boolean;
    data: T | null;
}

export const useFetch = <T,>(url: string): UseFetchDataType<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                const json = await res?.json();
                setData(json);
                setIsLoading(false);
            } catch (e) {
                if (e instanceof Error) {
                    throw new Error(e.message);
                }
            }
        })();
    }, []);

    return {
        isLoading,
        data,
    };
};
