import React, { useEffect } from 'react';

import { AddItemToCart, SetCartErrorMsg, SetCurrentGame } from '../../../store/actions';
import { GameDataProps, NumberBtnProps } from '../../../types/types';
import BetNumberBtn from '../../../components/buttons/betNumberBtn';
import GameSelect from '../../partials/gameSelect';
import useTGL from '../../../hooks/useStore';
import { NewBetContainerStyle, TitleContainer, GameSelectorContainer, GameRulesDesc, BetNumberBtnContainer, FunctionsButtonsContainer } from './style';





const NewBetContainer = (props: GameDataProps) => {

    const { states, dispatch } = useTGL()

    useEffect(() => {
        dispatch(SetCartErrorMsg("","red"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    // inRange(4) => [1,2,3,4]
    const inRange = (N: number) => {
        let Arr = []
        while (Arr.length < N) {
            Arr.push(Arr.length ? Arr.length + 1 : 1)
        }
        return Arr
    }

    const BetNumbers: NumberBtnProps[] = inRange(props.range).map((element) => {
        if (states.Game.CurrentGame.numbers?.length > 0) {
            if (states.Game.CurrentGame.numbers.find(e => e === element)) {
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
        

        const NowData = new Date()
        const Data = NowData
        const data = `${Data.getDay()}/${Data.getMonth()}/${Data.getFullYear()}`
        const OldState = { ...states.Game.CurrentGame }
        let NumberList: number[] = []

        if (OldState?.numbers?.length) {
            if (OldState.numbers.length >= 1) {
                NumberList = [...OldState.numbers]
            }
        } else {
            
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

        let randomNumbers: number[]
        if (states.Game.CurrentGame.numbers) {
            randomNumbers = [...states.Game.CurrentGame.numbers]
        } else {
            randomNumbers = []
        } // concat random numbers + current game numbers

        while (randomNumbers.length < (props['max-number'])) { // while don't have the required number of numbers
            randomNumbers.push(Math.floor(Math.random() * props.range + 1)) // add a random number to the list
            // eslint-disable-next-line no-loop-func
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
                            if (states.Game.CurrentGame.numbers.length === props['max-number']) {
                                dispatch(AddItemToCart())
                                dispatch(SetCartErrorMsg("","red"))
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