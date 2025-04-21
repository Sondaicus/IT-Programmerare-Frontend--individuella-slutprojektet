import MentionDiploma from "@/app/tsx/modules/mention-diploma";
import PositionName from "@/app/tsx/modules/position-name";
import LanguageSelect from "@/app/tsx/modules/language-select";

export default function HeaderLeftSide()
{

    return (
        <section className="header-left-side">
            <LanguageSelect />
            <MentionDiploma />
            <PositionName />
        </section>
    );
}