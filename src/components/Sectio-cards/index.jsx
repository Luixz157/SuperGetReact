import { ContainerDiv } from "../HeadingApp/styles";
import { SCard, ContentCard } from "./style";
import Icone1 from "../../assets/Icon-Card-1.svg";
import Icone2 from "../../assets/Icon-Card-2.svg";
import Icone3 from "../../assets/Icon-Card-3.svg";

const CardsInfo = [
    {
        image: Icone1,
        text: 'Compre e pague sua ',
        span: 'SuperGet',
    },
    {
        image: Icone2,
        text: 'Faça seu cadastro no site da ',
        span: 'Getnet',
    },
    {
        image: Icone3,
        text: 'Ative sua maquininha e  ',
        span: 'comece a vender',
    },
];

function generateKey(text, span) {
    return `${text}-${span}`;
}

export function SectionCard() {
    return (
        <SCard>
            <ContainerDiv>
                <ContentCard>
                    <div className="LeftDivCard">
                        <div className="ContentInfoCard">
                            <h3>2% </h3>
                            <h4>de taxa única</h4>
                            <p>crédito à vista e débito</p>
                        </div>
                        <div className="Line">
                            <div className="Gray"></div>
                            <div className="RedBall"></div>
                            <div className="Gray"></div>
                        </div>
                    </div>
                    <div className="RightDivCard">
                        <h4>Como Aproveitar</h4>
                        <ul>
                            {CardsInfo.map((card) => (
                                <li key={generateKey(card.text, card.span)}>
                                    <img src={card.image} alt="" />
                                    <p>{card.text} <span>{card.span}</span></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </ContentCard>
            </ContainerDiv>
            <div className="redLine"></div>
        </SCard>
    )
}
