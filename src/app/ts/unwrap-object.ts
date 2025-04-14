export default function unwrapObject(wrappedObject, wrappNames : string[])
{
    let unwrappedObject = wrappedObject;
    let lastCheckTick = 0;

    while(lastCheckTick < wrappNames.length)
    {
        for(let i_0 = 0; i_0 < wrappNames.length; i_0++)
        {
            let latestWrapper = unwrappedObject[wrappNames[i_0]];

            if(latestWrapper != undefined)
            {
                lastCheckTick = 0
                unwrappedObject = latestWrapper;
                break;
            }
            else
            {
                lastCheckTick += 1;
            }
        }
    }

    return unwrappedObject;
}