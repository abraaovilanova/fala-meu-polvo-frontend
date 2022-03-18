import React, { useState } from 'react'
import parse from 'html-react-parser'
import axios from 'axios'

import './NewSentence.css'

const getTheHTMLMainText = (stringText) => {
    return parse
        (stringText
            .replace(/\*([^\*]*[^\*]*)\*/g, '<span style="color:rgb(255,68,68)">$1</span>').replace(/\s\-/g,'<br />-'))

}


export default ()=>{
    const [text, setText] = useState('')
    const [tag, setTag] = useState('')
    const [information, setInformation] = useState('')
    const [language, setLanguage] = useState('')
    const [showAlert, setShowAlert] = useState(false)


    const handleSubimitForm = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        const BASE_URL = "https://fala-meu-polvo-api.herokuapp.com/sentences"
        const resp = await axios.post(BASE_URL, {text, tag, information,language },{
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        setShowAlert(resp.status == 200)
        setText('')
        setTag('')
        setInformation('')
        setLanguage('')
    }
    
    return(
        <form onSubmit={handleSubimitForm}>
            { text && <div>{getTheHTMLMainText(text)}</div>}
            <br/>
            {showAlert && <div>Frase adicionada com sucesso!</div>}
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
            <input type="submit" value="enviar"/>
        </form>
    )
}