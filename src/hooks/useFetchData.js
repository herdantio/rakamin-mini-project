import { useEffect, useState } from "react";
import axios from "../axios";

export default function useFetchData() {

    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/todos')
            setData(res.data)
        }
        fetchData()
    }, [])

    return [data]
}