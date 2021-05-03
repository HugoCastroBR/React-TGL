import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useTGL from '../../hooks/useStore';
import { ResetFilters, SetGamesData } from '../../store/actions';
import Fonts from '../../styles/fonts';
import { GameData, GameSelectButtonType, CurrentFiltersProps } from '../../types/types';
import { SelectFilter, SetRecentGames } from '../../store/actions';





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
    justify-content: space-around;
    height: 35px;
    @media screen and (max-width: 800px){
                width: 100vw;
                margin: 0px;
                & button{
                    width: 100px;
                    font-size: 12px;
                }
            }
`





const FilterSelect = () => {

    const { states, dispatch } = useTGL()
    const getGamesData = async () => {
    const res = await fetch("https://tglproject10-default-rtdb.firebaseio.com/types.json",{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const solved:GameData[] = await res.json()
    console.log("fetching")
    dispatch(SetGamesData(solved))
}



    useEffect(() => {
        dispatch(ResetFilters())
        dispatch(SetRecentGames(states.Auth.User.RecentGames))
        getGamesData()
    }, [])


const SelectGame = (element:CurrentFiltersProps) => {
    console.log(states.Cart.CurrentFilters)
    dispatch(SelectFilter(element))
}



return (
    <GameSelectContainer>
        {
            states.Cart.CurrentFilters.map((element, index) => {
                return <GameSelectButton
                active={element.active}
                color={element.color}
                key={index}
                data-index={index}
                onClick={(event) => {
                    event.preventDefault()
                    const Item = event.currentTarget
                    const id = Item.dataset.index
                    const Element = states.Cart.CurrentFilters[Number(id)]
                    SelectGame(Element)
                }}
            >{element.type}</GameSelectButton>   
                
            })
        }

    </GameSelectContainer>
)
}

export default FilterSelect;