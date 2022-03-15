import React, { useState } from 'react'
import parse from 'html-react-parser'
import axios from 'axios'

const getTheHTMLMainText = (stringText) => {
    return parse
        (stringText
            .replace(/\*([^\*]*[^\*]*)\*/g, '<span style="color:red">$1</span>').replace(/\s\-/g,'<br />-'))

}

export default ()=>{
    const [text, setText] = useState('')
    const [tag, setTag] = useState('')
    const [information, setInformation] = useState('')
    const [language, setLanguage] = useState('')


    const handleSubimitForm = (e) => {
        e.preventDefault()
        const BASE_URL = "http://localhost:3001/sentences"
        const resp = axios.post(BASE_URL, {text, tag, information,language })
    }
    
    return(
        <form action="" onSubmit={handleSubimitForm}>
            <label htmlFor="ftext">Text</label>
            <input  
                id="ftext" 
                type="text" 
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            <br />

            <label htmlFor="ftag">Tag</label>
            <input 
                id="ftag" 
                type="text" 
                value={tag}
                onChange={(e)=>setTag(e.target.value)}
            />
            <br />

            <label htmlFor="finformation">Information</label>
            <input 
                id="finformation" 
                type="text"
                value={information}
                onChange={(e)=>setInformation(e.target.value)}
            />
            <br />

            <label htmlFor="flanguage">Language</label>
            <input 
                id="flanguage" 
                type="text" 
                value={language}
                onChange={(e)=>setLanguage(e.target.value)}
            />
            <br />
            <input type="submit" value="enviar"/>
        </form>
    )
}