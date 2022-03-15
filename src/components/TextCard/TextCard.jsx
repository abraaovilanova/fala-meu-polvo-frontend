import parse from 'html-react-parser'

const getTheHTMLMainText = (stringText) => {
    return parse
        (stringText
            .replace(/\*([^\*]*[^\*]*)\*/g, '<span style="color:red">$1</span>').replace(/\s\-/g,'<br />-'))

}

export default (props) => {
    const {mainText} = props
    return (
        <h1>{getTheHTMLMainText(mainText)}</h1>
    )
}