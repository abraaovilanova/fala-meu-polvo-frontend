import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

import SimpleCard from '../../components/SimpleCard/SimpleCard';

import './Main.css'

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
            <div className="cards-list">
                {
                    tagsList.map((tag, index) =>{
                        return(
                            <SimpleCard key={`${index}-${tag}`} title={tag} url={`${language}/${tag}`} />
                        )}
                    )
                }
            </div>
        </>
    )
}