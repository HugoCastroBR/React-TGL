import api from '../../services/api';
import { SetGamesData } from '../actions';

export const getUserBets = () => {
    const config = {
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYyMDkyODc4NX0.xtUeYHI5TecgFaU5fexZQsu-ny_X8B4Rcj9G3TTwe_E'}
    }

    return (dispatch:any) => {
        api
            .get('/user-bets/1', config)
            .then(res =>  {
                dispatch(SetGamesData(res.data))
            })
            .catch(console.log)
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



    const config = {
        headers: { 
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYyMDkyODc4NX0.xtUeYHI5TecgFaU5fexZQsu-ny_X8B4Rcj9G3TTwe_E'
        }
        
    }

    const body = {
        bets: BetsToSave
    }

    // return (res:any) => {
    //     api
    //         .post('/bets', config)
    //         .then(res =>  {
    //             return res
    //         })
    //         .catch(console.log)
    // }
    api.defaults.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYyMDkyODc4NX0.xtUeYHI5TecgFaU5fexZQsu-ny_X8B4Rcj9G3TTwe_E"
    return  api
            .post('/bets',body)
            .then(res =>  {
                console.log(res.data)
                return res.data
            })
            .catch(console.log)
} 