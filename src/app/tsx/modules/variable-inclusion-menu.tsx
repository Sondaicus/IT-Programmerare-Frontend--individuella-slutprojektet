
import { getSourceElementParentByClassName , getSourceElementChildByClassName } from "@/app/ts/variable-modifying-functions";

export default function VariableInclusionMenu(techValue : string, techFamilySizeIndex : number)
{
    let includeTech : boolean = true;
    let indexValue : number = techFamilySizeIndex;
    setUrlValue();

    function switchIncludeTechValue()
    {
        if(includeTech == true)
        {
            includeTech = false;
        }
        else if(includeTech == false)
        {
            includeTech = true;
        }
        else
        {
            includeTech = true;
        }
    }

    function readIndexValue(event)
    {
        let techSelectIndexElement = event.srcElement;
        indexValue = techSelectIndexElement.value; 

        if(indexValue == null || indexValue == undefined)
        {
            indexValue = techFamilySizeIndex;
        }
    }

    function setUrlValue()
    {

    }

    return (
        <div className="select-tech-value-parent">
            <input 
                className="select-tech-index-value" 
                type="number" 
                value={indexValue} 
                onChange={() =>
                {
                    readIndexValue(event);
                }}
            />
            <button 
                className="checkbox-button"
                onClick={() => 
                {
                   switchIncludeTechValue();
                }}
            >
                <p>{techValue}</p>
                <input type="checkbox" checked={includeTech} />
            </button>
        </div>
    );
}