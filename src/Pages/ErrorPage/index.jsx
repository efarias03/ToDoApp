import "./styles.css"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
    return (
        <div className="error-div">
        <h1>Uh-Oh O.O. There's something wrong here, let me take you back buddy</h1>
        <Link className="link" to="/">Home Page</Link>
        </div>
    )

}