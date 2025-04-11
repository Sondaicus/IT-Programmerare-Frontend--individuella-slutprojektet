import ContactInfoField from "@/app/tsx/modules/personal-letter-generator/contact-info-field";
import EmptyLine from "@/app/tsx/modules/personal-letter-generator/empty-line";
import TitleField from "@/app/tsx/modules/personal-letter-generator/title-field";
import HeaderField from "@/app/tsx/modules/personal-letter-generator/header-field";
import MainField from "@/app/tsx/modules/personal-letter-generator/main-field";
import FooterField from "@/app/tsx/modules/personal-letter-generator/footer-field";
import ClosingMessageField from "@/app/tsx/modules/personal-letter-generator/closing-message-field";

export default function PersonalLetterGenerator()
{
    return (
        <div className="personal-letter-generator_spacer">
            <div className="personal-letter-generator_content">
                <ContactInfoField />
                <EmptyLine />
                <TitleField />
                <HeaderField />
                <EmptyLine />
                <MainField />
                <EmptyLine />
                <FooterField />
                <EmptyLine />
                <ClosingMessageField />
            </div>
        </div>
    );
}