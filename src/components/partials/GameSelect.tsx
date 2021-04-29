import React from 'react';
import styled from 'styled-components';
import Fonts from '../../styles/fonts';
import { GameData, GameSelectButtonType } from '../../types/types';





const GameSelectButton = styled.button<GameSelectButtonType>`
    ${Fonts}
    font: italic normal bold 14px "Helvetica Neue Bold" ;
    color: ${(props) => {
        if (props.active) {
            return `white`
        } else {
            return `${props.color ? props.color : 'gray'}`
        }
    }};
    width: 115px;
    height: 35px;
    border: 2px solid ${(props) => `${props.color ? props.color : 'gray'}`};
    border-radius: 100px;
    background-color: ${(props) => `${props.active ? props.color : 'transparent'}`};
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
`

const GameSelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export let GameList: GameData[] = [
    {
        type: "Lotofácil",
        description: "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
        range: 25,
        price: 2.5,
        "max-number": 15,
        color: "#7F3992",
        "min-cart-value": 30
    },
    {
        "type": "Quina",
        "description": "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
        "range": 80,
        "price": 2,
        "max-number": 5,
        "color": "#F79C31",
        "min-cart-value": 30
    },
    {
        "type": "Mega-Sena",
        "description": "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
        "range": 60,
        "price": 4.5,
        "max-number": 6,
        "color": "#01AC66",
        "min-cart-value": 30
    }
]



const GameSelect = () => {
    return (
        <GameSelectContainer>
            {
                // For Game in GameList make a Option save it on Redux
                GameList.map((element,index) => {
                    return <GameSelectButton
                        active={false}
                        color={element.color}   
                        key={index}
                    >{element.type}</GameSelectButton>
                })
            }
        </GameSelectContainer>
    )
}

export default GameSelect;