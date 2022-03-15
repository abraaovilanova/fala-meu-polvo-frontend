import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

export default () => {
    const BASE_URL = 'http://localhost:3001/sentences'
    let { language } = useParams();

    const [ tagsList, setTagsList] = useState([])

    useEffect(async ()=>{
        const tagsList = await axios.get(BASE_URL + '/' + language)
        setTagsList(tagsList.data.tags)
    },[])

    
    return(
        <>
            <p>Selecione uma tag...</p>
            <ul>
                {
                    tagsList.map((tag, index) =>{
                        return(
                            <li key={`${tag}-${index}`}>
                                <Link to={tag}>{tag}</Link>
                            </li>
                        )}
                    )
                }
            </ul>
        </>
    )
}