import api from '../../services/api';
import { SavedGame } from '../../types/types';
import {  SetRecentGames } from '../actions';

export const getUserBets = () => {
    



    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}`
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    
    }
    return (dispatch:any) => {
        api
            .get('/user-bets/0/1', config)
            .then(res =>  {
                let NewData = res.data.map((e:any) => {
                    if(typeof(e.numbers) === "string"){
                        let NewNumbers = e.numbers.split(",")
                        NewNumbers = NewNumbers.map((e:string) => Number(e))
                        const NewE = {...e,numbers:NewNumbers}
                        return NewE
                    }else{
                        return e
                    }
                })

                NewData = NewData.map((element:any) => {
                    const NewE:SavedGame = {
                        numbers:element.numbers,
                        price:Number(element.game.price),
                        color:element.game.color,
                        type:element.game.type,
                        data:element.created_at,
                    }
                    return NewE
                })

                const FinalData:SavedGame[] = [...NewData]
                dispatch(SetRecentGames(FinalData))
            })
            .catch(err => {})
    }
}


export interface SaveBets  {
    numbers:Number[],
    game_id:Number
}


export const addToUserBets = ( Bets: SaveBets[] ) => {


    const BetsToSave = Bets.map(e => {
        return {...e, numbers: e.numbers.join(',')}
    })


    const body = {
        bets: BetsToSave
    }


    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}`
        api
            .post('/bets',body)
            .then(res =>  {
                return res.data
            })
            .catch(err => {})
} 