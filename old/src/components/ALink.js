
import react from "react"

const ALink = ({linkText,url}) => {
    return (
      <a key={linkText} className="sm-text-decoration-none" href={url} target="_blank" rel="noreferrer">{linkText}</a>
    )
  }

  export default ALink