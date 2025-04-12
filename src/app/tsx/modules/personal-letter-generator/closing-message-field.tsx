import unwrapObject from "@/app/ts/unwrap-object";

export default function ClosingMessageField(plClosingMessage)
{
    let wrappNames = ["plData", "plClosingMessage"];
    let uwPlClosingMessage = unwrapObject(plClosingMessage, wrappNames);

    return (
        <div className="closing-message-field">
            <p>{uwPlClosingMessage.anticipation}</p>
            <p>{uwPlClosingMessage.regards}</p>
            <p>{uwPlClosingMessage.name}</p>
        </div>
    );
}