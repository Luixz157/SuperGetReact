import { Sect, BgLinear, SectContent, Left, Right, Heading3, RLeft, BallYellow, RRight } from "./style"
import {ContainerDiv} from "../HeadingApp/styles"

import IconeS from "../../assets/Icon-S.svg"
import MachineCard from "../../assets/ImgMaquininha.png"
import IconDate from "../../assets/Icon-Date.svg"
import Points from "../../assets/Points.svg"
import Shadow from "../../assets/Shadow.svg"

export function SectionHome() {
    return(
        <Sect>
            <BgLinear/>
            <ContainerDiv>
                <SectContent>
                    <Left>
                        <h1>SuperGet Mobile</h1>
                        <span>de R$ 118,90 por</span>
                        <h2>12x R$ 4,90</h2>
                        <p>ou <strong>R$ 58,80 à vista</strong> no boleto</p>
                        <p>👇</p>
                        <div>
                            <button>COMPRAR</button>
                            <div className="dowloadApp">
                                <img src={IconeS} alt="" />
                                <p>Baixe nosso <strong>app exclusivo</strong></p>
                            </div>
                        </div>
                        <Heading3>* Frete grátis para todo Brasil</Heading3>
                    </Left>
                    <Right>
                        <RLeft>
                            <BallYellow>
                                <p><span>50%</span>OFF</p>
                            </BallYellow>
                            <img src={MachineCard} alt="" className="Machine" />
                            <img src={Points} alt="" className="Pontin" />
                            <img src={Shadow} alt="" className="Sombra" />
                        </RLeft>
                        <RRight>
                            <h2>2%</h2>
                            <h3>no crédito à vista e no débito</h3>
                            <ul>
                                <li><p>Conexão bluetooth</p></li>
                                <li><p>Realize transações pelo celular</p></li>
                                <li><p>Venda pelo app SuperGet Mobile</p></li>
                            </ul>
                            <div>
                                <div className="Bg-Date"></div>
                                <div className="Info-Date">
                                <img src={IconDate} alt="" />
                                <p>Receba em até <span>2 dias úteis</span> na sua conta</p>
                                </div>
                            </div>
                        </RRight>
                    </Right>
                </SectContent>
            </ContainerDiv>
        </Sect>
    )
}
