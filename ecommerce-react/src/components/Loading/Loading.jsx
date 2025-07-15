import { GridLoader } from "react-spinners" ;
import "./loading.css";

const Loading = () => {
    return (
        <div className="loading">
        <GridLoader color ="blue" />
        </div>
    )
}

export default Loading