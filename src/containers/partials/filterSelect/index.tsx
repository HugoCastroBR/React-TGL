import React, { useEffect } from 'react';
import useTGL from '../../../hooks/useStore';
import { ResetFilters } from '../../../store/actions';
import { SelectFilter } from '../../../store/actions';
import { getGames } from '../../../store/FetchActions/FetchGames';
import { GameSelectButton, GameSelectContainer } from './../gameSelect/style';



const FilterSelect = () => {

    const { states, dispatch } = useTGL()


    useEffect(() => {
        dispatch(ResetFilters())
        dispatch(getGames())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


const SelectGame = (element:string) => {
    dispatch(SelectFilter(element))
}

const GenerateToShow = () => {

    let Filters = [...states.Game.RecentGames]
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