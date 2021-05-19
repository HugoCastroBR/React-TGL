import React, { useEffect } from 'react';
import styled from 'styled-components';
import useTGL from '../../hooks/useStore';
import { ResetFilters, SetGamesData } from '../../store/actions';
import { GameData, GameSelectButtonType } from '../../types/types';
import { SelectFilter, SetRecentGames } from '../../store/actions';
import { getGames } from '../../store/FetchActions/FetchGames';





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
    const NewData = solved.map((element) => {return {...element,active:false}})
    dispatch(SetGamesData(NewData))
}



    useEffect(() => {
        dispatch(ResetFilters())
        dispatch(SetRecentGames(states.Auth.User.RecentGames))
        dispatch(getGames())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


const SelectGame = (element:string) => {
    console.log(element)
    dispatch(SelectFilter(element))
}

const GenerateToShow = () => {

    let Filters = [...states.Game.CurrentFilters]
    let exist:string[] = []
    // eslint-disable-next-line array-callback-return
    Filters = Filters.filter((element) => {
        if(exist.includes(element.type)){

        }else{
            exist.push(element.type)
            return element
        }
    })

    let ToShow = Filters.map((element, index) => {
        return <GameSelectButton
        active={element.active}
        color={element.color}
        key={index}
        data-type={element.type}
        onClick={(event) => {
            event.preventDefault()
            const Item = event.currentTarget
            const ItemType = Item.dataset.type
            // // console.log(Item)
            // const Element = states.Game.CurrentFilters[Number(id)]
            // console.log(Element)
            if(ItemType){
                SelectGame(ItemType)
            }
        }}
    >{element.type}</GameSelectButton>  
    })
    
    return ToShow
}


return (
    <GameSelectContainer>
        {
            
            GenerateToShow() 
            
        }

    </GameSelectContainer>
)
}

export default FilterSelect;