import { useEffect, useState } from "react";
import axios from "../axios";


export default function useFetchItems(id) {

    const [items, setItems] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/todos/${id}/items`)
            console.log(res.data.length?res.data:'kosong')
            setItems(res.data)
        }
        fetchData()
    }, [])

    return [items]
}