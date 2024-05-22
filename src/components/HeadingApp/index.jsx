import { HeaderApp, DivLinks, ContainerDiv, DivBtn } from "./styles"

import LogoSuperGet from "../../assets/Logo.png"
import IconCarrinho from "../../assets/Icon-CarBuy.svg"
import IconePessoa from "../../assets/Icon-Person.svg"

const LinkHeader = [
    {
        Link:'#',
        NameLink:'Maquininha',
    },
    {
        Link:'#',
        NameLink:'App Getnet',
    },
    {
        Link:'#',
        NameLink:'Cartão SuperGet',
    },
    {
        Link:'#',
        NameLink:'Ajuda',
    },
    {
        Link:'#',
        NameLink:'Quero Alugar',
    },
    {
        Link:'#',
        NameLink:'Cadastro',
    },
];

function generateKey(nameLink) {
    return `header-link-${nameLink.replace(/\s+/g, '-').toLowerCase()}`;
}

export function HeaderApplication() {
    return (
        <ContainerDiv>
            <HeaderApp>
                <div>
                    <img src={LogoSuperGet} alt="Logo da Empresa" />
                </div>
                <DivLinks>
                    {
                        LinkHeader.map((item) => (
                            <li key={generateKey(item.NameLink)}>
                                <a target="blank" href={item.Link}>{item.NameLink}</a>
                            </li>
                        ))
                    }
                </DivLinks>
                <DivBtn>
                    <button>Pedir maquininha</button>
                    <div>
                        <img src={IconCarrinho} alt="Ícone de Carrinho" />
                        <img src={IconePessoa} alt="Ícone de Pessoa" />
                    </div>
                </DivBtn>
            </HeaderApp>
        </ContainerDiv>
    );
}
