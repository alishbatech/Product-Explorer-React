import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [isError, setError] = useState(false)

    useEffect(() => {
        async function handleFetchData() {
            try {
                const res = await fetch(url)
                const jsonData =await res.json()
                setData(jsonData)
            }
            catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        handleFetchData();
    }, [url])


    return { data, isError, isLoading }
}