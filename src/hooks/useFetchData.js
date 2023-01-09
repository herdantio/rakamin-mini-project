import { useContext, useEffect, useState } from "react";
import axios from "../axios";
import { store } from "../store";

export default function useFetchData() {

    const [data, setData] = useState([])
    const {dispatch} = useContext(store)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/todos')
            setData(res.data)
            dispatch({type: 'setTodos', payload:res.data})
        }
        fetchData()
    }, [])

    return [data]
}