import { useEffect, useState } from "react"
import axios from 'axios'

export function useRequestData (url: string) {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

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