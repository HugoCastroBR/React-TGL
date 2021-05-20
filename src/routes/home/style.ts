import styled from 'styled-components';

export const RecentGamesTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    

    @media screen and (max-width: 1200px){
        margin-top: 30px;
        flex-direction: column;
    }
    & div:first-child{

        
        width: 60%;
        justify-content: flex-start;
        align-items: center;


        @media screen and (max-width: 1200px){
            margin-top: -32px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        & h2{
            text-align: center;
            font: italic normal bold 24px "Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #707070;
            text-transform: uppercase;
            margin: 0px;
            @media screen and (max-width: 1200px){
                font-size: 32px;
            }
            @media screen and (max-width: 800px){
                font-size: 24px;
                margin-top: 0px;
            }
            
        }

        & span{

            text-align: left;
            font: italic normal normal 16px"Helvetica Neue Bold";
            letter-spacing: 0px;
            color: #868686;
            margin-left: 20px;
            margin-right: 32px;
            @media screen and (max-width: 1200px){
                margin-bottom: 10px;
                margin-left: 32px;
            }
        }
        & div{
            height: auto;
            @media screen and(max-width: 1200px){
                margin-bottom: -40px;
            }
            & button{
                margin-top: 12px;
            }
        }
    }
    
    & div{
        display: flex;
        flex-direction: row;
        align-items: flex-start;    
        justify-content: flex-start;
        @media screen and (max-width: 1200px){
            width: 100%;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 2px;
        }

    }
    & aside{
        height: 40px;
        align-items: center;
        margin-top: -74px;
        
        & a {
            text-decoration: none;
        }
        @media screen and (max-width: 1200px){
            margin-left: 14px;
            margin-top: 32px;
        }
    }

    

`


export const HomeContainer = styled.section`
    width: 100vw;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`

export const RecentGamesContainer = styled.div`

    min-height: calc(100vh - 340px);
    height: calc(100vh - 340px);
    max-height: calc(100vh - 340px);
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    margin-top: 40px;
    @media screen and (max-width: 1200px){
        margin-top: 70px;
    }
    @media screen and (max-width: 600px){
        min-height: 80vh;
        height: 80vh;
        max-height: 80vh;
        margin-bottom: 40px;
    }
`

export const EmptyRecentGames = styled.span`
    margin-top: 12px;
    font: italic normal normal 22px"Helvetica Neue Medium";
    letter-spacing: 0px;
    color: #868686;

    @media screen and (max-width: 1200px){
        margin-top: 70px;
        width: 100%;
        margin-left: -22px;
        text-align: center;
    }
`



