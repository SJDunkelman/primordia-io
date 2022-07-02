import React, {useState} from "react";
import ChevronUp from "../images/chevron-up.svg";
import ChevronDown from "../images/chevron-down.svg";


const JobsAccordion = props => {
    const [chevronUp, setChevron] = useState(true);

    function handleClick(){
        setChevron(!chevronUp);
    }

    return (
        <div className={`bg-${props.bgColour} flex flex-col space-y-2 rounded-lg text-black p-2`}>
            <div className={`flex justify-between items-center`} onClick={handleClick}>
                <p>{props.title}</p>
                {chevronUp ? <img src={ChevronUp} alt="Chevron up" className="w-4 h-4"/> :
                    <img src={ChevronDown} alt="Chevron down" className="w-4 h-4"/>}
            </div>
            {
                !chevronUp && <>
                    <p className="text-left">{props.description}</p>
                </>
            }
        </div>

    )
}

export default JobsAccordion;