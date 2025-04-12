import ContactInfoField from "@/app/tsx/modules/personal-letter-generator/contact-info-field";
import EmptyLine from "@/app/tsx/modules/personal-letter-generator/empty-line";
import TitleField from "@/app/tsx/modules/personal-letter-generator/title-field";
import HeaderField from "@/app/tsx/modules/personal-letter-generator/header-field";
import MainField from "@/app/tsx/modules/personal-letter-generator/main-field";
import FooterField from "@/app/tsx/modules/personal-letter-generator/footer-field";
import ClosingMessageField from "@/app/tsx/modules/personal-letter-generator/closing-message-field";
import unwrapObject from "@/app/ts/unwrap-object";

export default function PersonalLetterGenerator(plData)
{
    let wrappNames = ["plData"];
    let uwPlData = unwrapObject(plData, wrappNames);

    return (
        <div className="personal-letter-generator_spacer">
            <div className="personal-letter-generator_content">
                <ContactInfoField plContactInfo={uwPlData.plContactInfo} />
                <EmptyLine />
                <TitleField plTitle={uwPlData.plTitle} />
                <HeaderField plHeader={uwPlData.plHeader} />
                <EmptyLine />
                <MainField plMain={uwPlData.plMain} />
                <EmptyLine />
                <FooterField plFooter={uwPlData.plFooter} />
                <EmptyLine />
                <ClosingMessageField plClosingMessage={uwPlData.plClosingMessage} />
            </div>
        </div>
    );
}