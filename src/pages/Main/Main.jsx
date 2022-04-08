import React, {useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

import SimpleCard from '../../components/SimpleCard/SimpleCard';
import Loader from '../../components/Loader/Loader';

import './Main.css'

export default () => {
    const BASE_URL = 'https://fala-meu-polvo-api.herokuapp.com/sentences'

    let { language } = useParams();

    const [searchQuery, setSearchQuery] = useState('')

    const [ tagsList, setTagsList] = useState([])

    const [ filtredTagGroup, setFiltredTagGroup] = useState(tagsList)

    const [loading, setLoading] = useState(true)

    useEffect(async ()=>{
        const token = localStorage.getItem('token')

        const tagsList = await axios.get(BASE_URL + '/' + language,{
            headers: {
                'Authorization': `Bearer ${token}`
              }})
        setTagsList(tagsList.data.tags)
        setFiltredTagGroup(tagsList.data.tags)
        setLoading(false)
    },[])

    const handleFilterTagsBySearchQuery = (e) =>{
        setSearchQuery(e.target.value)
        if(e.target.value){
            setFiltredTagGroup(tagsList.filter((value)=>value.includes(e.target.value)))
        }else{
            setFiltredTagGroup(tagsList)
        }

    }

    
    return(
        <div className="main">
            { loading ? 
            <Loader /> 
            :
            <>
            <p>Escolha o que aprender hoje...</p>
            <div className="search-input">
            <i className="fa fa-search" aria-hidden="true" />
                <input 
                    type="search" 
                    placeholder='Procurar...' 
                    onChange={(e)=>handleFilterTagsBySearchQuery(e)}
                />
            </div>
            <div className="cards-list">
                {
                    filtredTagGroup.map((tag, index) =>{
                        return(
                            <SimpleCard key={`${index}-${tag}`} title={tag} url={`${language}/${tag}`} />
                        )}
                    )
                }
            </div>
            </>}
        </div>
    )
}