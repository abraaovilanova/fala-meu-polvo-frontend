import parse from 'html-react-parser'

import './TextCard.css'

const getTheHTMLMainText = (stringText) => {
    return parse
        (stringText
            .replace(/\*([^\*]*[^\*]*)\*/g, '<span style="color:rgb(197,134,192)">$1</span>').replace(/\s\-/g,'<br />-'))

}

export default (props) => {
    const {mainText} = props
    return (
        <div className="text-card">
            <h2 className="text-card__main-text">{getTheHTMLMainText(mainText)}</h2>
        </div>
    )
}