import TechniquesIncluded from "@/app/tsx/modules/techniques-included";
import PhrasesIncluded from "@/app/tsx/modules/phrases-included";

export default function HeaderRightSide()
{

    return (
        <section className="header-right-side">
            <PhrasesIncluded />
            <TechniquesIncluded />
        </section>
    );
}