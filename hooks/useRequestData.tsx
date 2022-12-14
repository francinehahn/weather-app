import { useEffect, useState } from "react"
import axios from 'axios'

export function useRequestData (url: string) {
    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>("")
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data)
                setIsLoading(false)
            }).catch(err => {
                setError(err.response.data.message)
                setIsLoading(false)
            })
    }, [url])

    return [data, error, isLoading]
}