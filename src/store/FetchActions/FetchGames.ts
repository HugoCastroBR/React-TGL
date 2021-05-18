import api from '../../services/api';
import { SetGamesData } from '../actions';

export const getGames = () => {
    const config = {
        headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYyMDkyODc4NX0.xtUeYHI5TecgFaU5fexZQsu-ny_X8B4Rcj9G3TTwe_E'}
    }

    
    return (dispatch:any) => {
        api
            .get('/games', config)
            .then(res =>  {
                dispatch(SetGamesData(res.data))
            })
            .catch(console.log)
    }
} 