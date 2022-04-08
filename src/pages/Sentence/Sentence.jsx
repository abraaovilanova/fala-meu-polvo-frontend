import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

import { useSpeechSynthesis } from "react-speech-kit"

// Components
import TextCard from '../../components/TextCard/TextCard'
import Loader from '../../components/Loader/Loader'

// Style
import './Sentence.css'


export default () => {
    const [slideIndex, setSlideindex] = useState(0)
    const [sentencesList, setSentencesList] = useState(undefined)
    const [loading, setLoading] = useState(true)
    
    let { language, tag } = useParams();
    let navigate = useNavigate();

    const buttonIsDisablad = sentencesList ? slideIndex >= sentencesList.length - 1: false

    const { speak, voices, speaking } = useSpeechSynthesis()
    const selectedVoice = language == 'english' ? voices[3] : voices[8]

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
        setLoading(false)
    },[])

    return (
        <div className="sentence">
            {loading ? <Loader />
                :
                <>
                    <button onClick={()=>navigate(`/${language}`)}><i className="fa fa-times" aria-hidden="true"></i></button><br />
                    
                    {sentencesList && <TextCard mainText={sentencesList[slideIndex].text} />}

                    <button disabled={speaking} class='btn btn-primary btn-lg' 
                            onClick={() =>{
                                speak({text: sentencesList[slideIndex].text.replace(/\*/g, '') , voice: selectedVoice})}
                            }><i className="fa fa-play"></i></button>
        
                    <div className="buttons-group">
                        <button 
                            disabled={slideIndex <= 0} 
                            onClick={()=>setSlideindex(prev => prev - 1)}
                        >
                            <i className="fa fa-arrow-left" aria-hidden="true" />
                        </button>
                        {slideIndex+1} / {sentencesList?.length}
                        <button 
                            disabled={buttonIsDisablad} 
                            onClick={()=>setSlideindex(prev => prev + 1)}
                        >
                            <i className="fa fa-arrow-right" aria-hidden="true" />
                        </button>
                    </div>
                </>
            }
        </div>
    )
}