import unwrapObject from "@/app/ts/unwrap-object";

export default function TitleField(plTitle)
{
    let wrappNames = ["plData", "plTitle"];
    let uwPlTitle = unwrapObject(plTitle, wrappNames);

    return (
        <div className="title-field">
            <p>{uwPlTitle.title}</p>
        </div>
    );
}