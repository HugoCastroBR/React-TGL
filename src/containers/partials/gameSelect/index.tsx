import React from 'react';
import useTGL from '../../../hooks/useStore';
import { SetCurrentGame, SetGamesData } from '../../../store/actions';
import { GameDataProps,SavedGame } from '../../../types/types';

import { GameSelectButton, GameSelectContainer } from './style';









const GameSelect = () => {

    const { states, dispatch } = useTGL()
    

    const SelectGame = (element:GameDataProps) => {
        dispatch(SetCurrentGame({} as SavedGame))
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