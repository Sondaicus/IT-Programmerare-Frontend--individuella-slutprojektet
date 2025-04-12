import unwrapObject from "@/app/ts/unwrap-object";

export default function MainField(plMain)
{
    let wrappNames = ["plData", "plMain"];
    let uwPlMain = unwrapObject(plMain, wrappNames)

    return (
        <div className="main-field">
            <p>{uwPlMain.main}</p>
        </div>
    );
}