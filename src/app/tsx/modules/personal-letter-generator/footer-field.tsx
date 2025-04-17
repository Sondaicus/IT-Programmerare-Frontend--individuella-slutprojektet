import { unwrapObject } from "@/app/ts/variable-modifying-functions";

export default function FooterField(plFooter)
{
    let wrappNames = ["plData", "plFooter"];
    let uwPlFooter = unwrapObject(plFooter, wrappNames)

    return (
        <div className="footer-field">
            <p>{uwPlFooter.footer}</p>
        </div>
    );
}