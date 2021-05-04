import React from 'react';
import styled from 'styled-components';
import { AddItemToCart, SetCurrentGame } from '../../store/actions';
import { GameDataProps, NumberBtnProps } from '../../types/types';
import BetNumberBtn from '../buttons/BetNumberBtn';
import GameSelect from '../partials/GameSelect';
import useTGL from './../../hooks/useStore';


const NewBetContainerStyle = styled.div`
    margin-top: 36px;
    width: 98vw;
    max-width: 840px;
    height: auto; 
    display: flex;
    flex-direction: column;
`
// 784px


const TitleContainer = styled.div`
    & h1{
        margin: 0px;
        font: italic normal bold 24px "Helvetica Neue Bold";
        color: #707070;
        text-transform: uppercase;

        & span{
            font: italic normal 300 25px "Helvetica Neue Light";
        }
    }
    margin-bottom: 28px;

`
const GameSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;

    & h2{
        margin: 0px;
        font: italic normal bold 18px "Helvetica Neue Bold";
        color: #868686;
        margin-bottom: 20px;
    }

    & div{
        margin-left: -4px;
        display: flex;
        & button{
        margin-right: 16px;
        }
    }
    margin-bottom: 28px;
`

const GameRulesDesc = styled.div`
    & h3{
        margin: 0px;
        font: italic normal bold 17px  "Helvetica Neue Bold";
        letter-spacing: 0px;
        color: #868686;
    }
    & span{
        font: italic normal normal 17px "Helvetica Neue Roman";
        letter-spacing: 0px;
        color: #868686;
    }

    margin-bottom: 28px;

`

const BetNumberBtnContainer = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 32px;

    @media screen and (max-width: 1200px){
        max-width: 840px;
        width: 98vw;
        justify-content: center;

    }
`


const FunctionsButtonsContainer = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
    }

    & button{
        width: 164px;
        height: 52px;
        border: 1px solid #27C383;
        background-color: #27C383;
        border-radius: 10px;
        font: normal normal 16px "Helvetica Neue Roman";
        letter-spacing: 0px;
        color: white;
        cursor: pointer;

        @media screen and (max-width: 1200px){
            width: 140px;
            height: 50px;  
        }
        @media screen and (max-width: 500px){
            margin-top: 10px;
            
            width: 300px;
            height: 70px;
        }
    }


    & div{
        @media screen and (max-width: 500px){
            display: flex;
            flex-direction: column;
        }
        & button{
            margin-right: 20px;
            border: 1px solid #27C383;
            border-radius: 10px;
            background-color: transparent;
            color: #27C383;
            transition: 0.5s;

            @media screen and (max-width: 500px){
                margin-right: 0px;
            }   
            
        }

        & button:hover{
            transition: 0.5s;
            /* box-shadow: inset 190px 0px 0px -26px  #27C383; */
            box-shadow: inset 0px -220px 0px -164px  #27C383;
            color: white;
            @media screen and (max-width: 500px){
                box-shadow: inset 0px -240px 0px -164px  #27C383;
            }  
            
        }
        
    }

`



const NewBetContainer = (props: GameDataProps) => {

    const { states, dispatch } = useTGL()

    // inRange(4) => [1,2,3,4]
    const inRange = (N: number) => {
        let Arr = []
        while (Arr.length < N) {
            Arr.push(Arr.length ? Arr.length + 1 : 1)
        }
        return Arr
    }

    const BetNumbers: NumberBtnProps[] = inRange(props.range).map((element) => {
        if (states.Cart.CurrentGame.numbers?.length > 0) {
            if (states.Cart.CurrentGame.numbers.find(e => e === element)) {
                return {
                    number: element,
                    selected: true
                }
            } else {
                return {
                    number: element,
                    selected: false
                }
            }
        } else {
            return {
                number: element,
                selected: false
            }
        }

    })



    const HandleNumberClick = (NumberToAdd: number) => {
        console.log(states.Cart.CurrentGame)

        const NowData = new Date()
        const Data = NowData
        const data = `${Data.getDay()}/${Data.getMonth()}/${Data.getFullYear()}`
        const OldState = { ...states.Cart.CurrentGame }
        let NumberList: number[] = []

        if (OldState?.numbers?.length) {
            if (OldState.numbers.length >= 1) {
                NumberList = [...OldState.numbers]
            }
        } else {
            console.log("Just First")
            NumberList = []
        }

        if (NumberList.length < props['max-number']) {
            if (NumberList.length > 0) {
                const Iindex = OldState.numbers.indexOf(NumberToAdd)
                if (Iindex !== -1) {
                    NumberList.splice(Iindex, 1)
                } else {
                    NumberList.push(NumberToAdd)
                }
            } else {
                NumberList.push(NumberToAdd)
            }


            dispatch(SetCurrentGame({
                color: props.color,
                data,
                numbers: NumberList,
                price: props.price,
                type: props.type
            }))
        } else {
            const Iindex = OldState.numbers.indexOf(NumberToAdd)
            if (Iindex !== -1) {
                NumberList.splice(Iindex, 1)
                dispatch(SetCurrentGame({
                    color: props.color,
                    data,
                    numbers: NumberList,
                    price: props.price,
                    type: props.type
                }))
            }
        }



    }


    const HandlerDispatch = (numbers: number[]) => {
        const NowData = new Date()
        const Data = NowData
        const data = `${Data.getDay()}/${Data.getMonth()}/${Data.getFullYear()}`

        dispatch(SetCurrentGame({
            color: props.color,
            data,
            numbers: numbers,
            price: props.price,
            type: props.type
        }))
    }

    const RandomComplete = () => {
        const allNumbers = document.querySelectorAll('.bet__number__button') // get all the number buttons
        let randomNumbers: number[]
        if (states.Cart.CurrentGame.numbers) {
            randomNumbers = [...states.Cart.CurrentGame.numbers]
        } else {
            randomNumbers = []
        } // concat random numbers + current game numbers

        while (randomNumbers.length < (props['max-number'])) { // while don't have the required number of numbers
            randomNumbers.push(Math.floor(Math.random() * props.range + 1)) // add a random number to the list
            randomNumbers = randomNumbers.filter((element, index) => randomNumbers.indexOf(element) === index) // remove the repeated numbers
        }
        HandlerDispatch(randomNumbers)
    }

    return (

        <NewBetContainerStyle>
            <TitleContainer>
                <h1>New bet <span>for {props.type}</span></h1>
            </TitleContainer>
            <GameSelectorContainer>
                <h2>
                    Choose a game
                </h2>
                <div>
                    <GameSelect />
                </div>
            </GameSelectorContainer>
            <GameRulesDesc>
                <h3>Fill your bet</h3>
                <span>{props.description}</span>
            </GameRulesDesc>
            <BetNumberBtnContainer>


                {BetNumbers.map((element, index) =>
                    <BetNumberBtn
                        OnClick={(event) => HandleNumberClick(Number(event.currentTarget.innerHTML))}
                        number={element.number} key={index} selected={element.selected} data-number={element.number} />)}
                {/* <BetNumberBtn number={1} selected={true}/> */}

            </BetNumberBtnContainer>

            <FunctionsButtonsContainer>
                <div>
                    <button
                        onClick={
                            () => {
                                
                                RandomComplete()
                            }
                        }
                    >Complete game</button>

                    <button onClick={
                        () => {
                            HandlerDispatch([])
                        }
                    }>Clear game</button>
                </div>
                <button
                    onClick={
                        () => {
                            if (states.Cart.CurrentGame.numbers.length === props['max-number']) {
                                dispatch(AddItemToCart())
                                HandlerDispatch([])
                            } else {
                                // show error msg you need to select X numbers
                            }
                        }
                    }
                >Add to cart</button>
            </FunctionsButtonsContainer>
        </NewBetContainerStyle>
    )
}

export default NewBetContainer;