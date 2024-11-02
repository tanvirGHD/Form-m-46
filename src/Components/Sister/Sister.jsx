import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Sister = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Sister</h2>
            <h2>Gift: {gift}</h2>
        </div>
    );
};

export default Sister;