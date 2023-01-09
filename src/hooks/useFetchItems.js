import { useContext, useEffect, useState } from "react";
import axios from "../axios";
import { store } from "../store";


export default function useFetchItems(id) {

    const [items, setItems] = useState([])
    const {state, dispatch} = useContext(store)
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/todos/${id}/items`)
            setItems(res.data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/todos/${id}/items`)
            setItems(res.data)
        }
        if(id == state.deletedTodoId){
            fetchData()
            dispatch({type: 'setDeletedTodoId', payload: null})
        }
    }, [state.deletedTodoId])

    return [items]
}