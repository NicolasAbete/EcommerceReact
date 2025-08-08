import { GridLoader } from "react-spinners" ;
import "./Loading.css";

const Loading = () => {
    return (
        <div className="loading">
        <GridLoader color ="blue" />
        </div>
    )
}

export default Loading