import React, {  useEffect } from 'react';
import styled from 'styled-components';
import useTGL from '../../hooks/useStore';
import { ResetFilters, SetGamesData } from '../../store/actions';
import {  GameData, GameDataProps, GameSelectButtonType } from '../../types/types';






const GameSelectButton = styled.button<GameSelectButtonType>`
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
    @media screen and (max-width: 1200px){
        width: 100vw;
        margin: 0px;
        justify-content: center;
        
        & button{
            width: 100px;
            font-size: 12px;
            }
        }

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;

        & button{
            width: 200px;
            height: 42px;
            font-size: 16px;
            }
        
    }
`





const GameSelect = () => {

    const { states, dispatch } = useTGL()
    const getGamesData = async () => {
        const res = await fetch("https://tglproject10-default-rtdb.firebaseio.com/types.json",{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const solved:GameData[] = await res.json()
        const NewData = solved.map((element) => {return {...element,active:false}})
        if(states.Game.GamesData.length > 0){
            if(states.Game.GamesData.find(element => element.active === true)){

            }else{
                NewData[0].active = true
            }
        }
        
        
        
    }

    useEffect(() => {
        dispatch(ResetFilters())
        getGamesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const SelectGame = (element:GameDataProps) => {
        let NewGameData = [...states.Game.GamesData]
        NewGameData = NewGameData.map(e => {
            if(e.type === element.type){
                return {...e,active:true}
            }else{
                return {...e,active:false}
            }
        })

        dispatch(SetGamesData(NewGameData))
    }



return (
    <GameSelectContainer>
        {
            states.Game.GamesData.map((element, index) => {
                return <GameSelectButton
                active={element.active}
                color={element.color}
                key={index}
                data-index={index}
                onClick={(event) => {
                    event.preventDefault()
                    const Item = event.currentTarget
                    const id = Item.dataset.index
                    const Element = states.Game.GamesData[Number(id)]
                    SelectGame(Element)
                }}
            >{element.type}</GameSelectButton>   
                
            })
        }

    </GameSelectContainer>
)
}

export default GameSelect;