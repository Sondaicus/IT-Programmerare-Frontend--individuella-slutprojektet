export default function unwrapObject(wrappedObject, wrappNames : string[])
{
    let unwrappedObject = wrappedObject;
    let lestCheckTick = 0;

    while(lestCheckTick < wrappNames.length)
    {
        for(let i_0 = 0; i_0 < wrappNames.length; i_0++)
        {
            let latestWrapper = unwrappedObject[wrappNames[i_0]];

            if(latestWrapper != undefined)
            {
                lestCheckTick = 0
                unwrappedObject = latestWrapper;
                break;
            }
            else
            {
                lestCheckTick += 1;
            }
        }
    }

    return unwrappedObject;
}