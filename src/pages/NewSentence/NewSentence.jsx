import React, { useState } from 'react'
import axios from 'axios'

import './NewSentence.css'

export default ()=>{
    const [text, setText] = useState('')
    const [tag, setTag] = useState('')
    const [information, setInformation] = useState('')
    const [language, setLanguage] = useState('')
    const [showAlert, setShowAlert] = useState(false)


    const handleSubimitForm = async (e) => {
        e.preventDefault()
        const BASE_URL = "http://localhost:3001/sentences"
        const resp = await axios.post(BASE_URL, {text, tag, information,language })
        setShowAlert(resp.status == 200)
        setText('')
        setTag('')
        setInformation('')
        setLanguage('')
    }
    
    return(
        <form onSubmit={handleSubimitForm}>
            {showAlert && <div>Frase adicionada com sucesso!</div>}
            <label htmlFor="ftext">Text: </label>
            <textarea  
                id="ftext" 
                type="text" 
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <br />

            <label htmlFor="ftag">Tag: </label>
            <input 
                id="ftag" 
                type="text" 
                value={tag}
                onChange={(e)=>setTag(e.target.value)}
            />
            <br />

            <label htmlFor="finformation">Information: </label>
            <input 
                id="finformation" 
                type="text"
                value={information}
                onChange={(e)=>setInformation(e.target.value)}
            />
            <br />

            <label htmlFor="flanguage">Language: </label>
            <select
                id="flanguage" 
                type="text"
                value={language}
                onChange={(e)=>setLanguage(e.target.value)}
            >
                <option></option>
                <option value="french">French</option>
                <option value="english">English</option>
            </select>
            <br />
            <input type="submit" value="enviar"/>
        </form>
    )
}