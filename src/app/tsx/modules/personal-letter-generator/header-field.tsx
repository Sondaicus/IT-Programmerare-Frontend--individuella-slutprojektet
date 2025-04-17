import { unwrapObject } from "@/app/ts/variable-modifying-functions";

export default function HeaderField(plHeader)
{
    let wrappNames = ["plData", "plHeader"];
    let uwPlHeader = unwrapObject(plHeader, wrappNames)

    return (
        <div className="header-field">
            <p>{uwPlHeader.header}</p>
        </div>
    );
}