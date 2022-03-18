import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

// Components
import TextCard from '../../components/TextCard/TextCard'

// Style
import './Sentence.css'


export default () => {
    const [slideIndex, setSlideindex] = useState(0)
    const [sentencesList, setSentencesList] = useState(undefined)

    let { language, tag } = useParams();
    let navigate = useNavigate();

    useEffect(async ()=>{
        const token = localStorage.getItem('token')
        const BASE_URL = 'https://fala-meu-polvo-api.herokuapp.com/sentences'
        const resp = await axios.get(BASE_URL + `/${language}/${tag}`,{
            headers: {
                'Authorization': `Bearer ${token}`
              }})

        const respArray = resp.data.sentencesList
        const shuffledArray = respArray.sort((a, b) => 0.5 - Math.random());
        setSentencesList(shuffledArray)
    },[])

    return (
        <>
            <button onClick={()=>navigate(`/${language}`)}><i className="fa fa-times" aria-hidden="true"></i></button><br />

            {sentencesList && <TextCard mainText={sentencesList[slideIndex].text}  />}

            <div className="buttons-group">
                <button 
                    disabled={slideIndex <= 0} 
                    onClick={()=>setSlideindex(prev => prev - 1)}
                >
                    <i className="fa fa-arrow-left" aria-hidden="true" />
                </button>
                
                <button 
                    disabled={sentencesList ? slideIndex >= sentencesList.length - 1: false} 
                    onClick={()=>setSlideindex(prev => prev + 1)}
                >
                    <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
            </div>
        </>
    )
}