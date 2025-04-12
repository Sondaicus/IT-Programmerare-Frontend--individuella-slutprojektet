import unwrapObject from "@/app/ts/unwrap-object";

export default function ContactInfoField(plContactInfo)
{
    let wrappNames = ["plData", "plContactInfo"];
    let uwPlContactInfo = unwrapObject(plContactInfo, wrappNames);

    return (
        <div className="contact-info-field">
            <p className="contact-info-name">{uwPlContactInfo.name}</p>
            <p>{uwPlContactInfo.linkedIn}</p>
            <p>{uwPlContactInfo.phone}</p>
            <p>{uwPlContactInfo.email}</p>
        </div>
    );
}