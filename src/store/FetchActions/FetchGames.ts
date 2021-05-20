import api from '../../services/api';
import { SetGamesData } from '../actions';

export const getGames = () => {
    

    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}`
    
    const config = {
        headers: { Authorization: `Bearer ${token}`}
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