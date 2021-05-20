import styled from 'styled-components';


export const NewBetContainerStyle = styled.div`
    margin-top: 36px;
    width: 98vw;
    max-width: 840px;
    height: auto; 
    display: flex;
    flex-direction: column;
`
// 784px


export const TitleContainer = styled.div`
    & h1{
        margin: 0px;
        font: italic normal bold 24px "Helvetica Neue Bold";
        color: #707070;
        text-transform: uppercase;

        & span{
            font: italic normal 300 25px "Helvetica Neue Light";
        }
    }
    margin-bottom: 28px;

`
export const GameSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;

    & h2{
        margin: 0px;
        font: italic normal bold 18px "Helvetica Neue Bold";
        color: #868686;
        margin-bottom: 20px;
    }

    & div{
        width: 100%;
        justify-content: flex-start;
        margin-left: -4px;
        height: auto;
        flex-wrap: wrap;
        & div{
            @media screen and(max-width: 1200px){
                margin-bottom: -40px;
                justify-content: center;
            }
        }
        @media screen and(max-width: 1200px){
            margin-bottom: -40px;
            justify-content: center;
            
        }
        & button{
            margin-top: 12px;
        }
    }
    margin-bottom: 28px;
`

export const GameRulesDesc = styled.div`
    & h3{
        margin: 0px;
        font: italic normal bold 17px  "Helvetica Neue Bold";
        letter-spacing: 0px;
        color: #868686;
    }
    & span{
        font: italic normal normal 17px "Helvetica Neue Roman";
        letter-spacing: 0px;
        color: #868686;
    }

    margin-bottom: 28px;

`

export const BetNumberBtnContainer = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 32px;

    @media screen and (max-width: 1200px){
        max-width: 840px;
        width: 98vw;
        justify-content: center;

    }
`


export const FunctionsButtonsContainer = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 36px;
    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: center;
    }

    & button{
        width: 164px;
        height: 52px;
        border: 1px solid #27C383;
        background-color: #27C383;
        border-radius: 10px;
        font: normal normal 16px "Helvetica Neue Roman";
        letter-spacing: 0px;
        color: white;
        cursor: pointer;

        @media screen and (max-width: 1200px){
            width: 140px;
            height: 50px;  
        }
        @media screen and (max-width: 500px){
            margin-top: 10px;
            
            width: 300px;
            height: 70px;
        }
    }


    & div{
        @media screen and (max-width: 500px){
            display: flex;
            flex-direction: column;
        }
        & button{
            margin-right: 20px;
            border: 1px solid #27C383;
            border-radius: 10px;
            background-color: transparent;
            color: #27C383;
            transition: 0.5s;

            @media screen and (max-width: 500px){
                margin-right: 0px;
            }   
            
        }

        & button:hover{
            transition: 0.5s;
            /* box-shadow: inset 190px 0px 0px -26px  #27C383; */
            box-shadow: inset 0px -220px 0px -164px  #27C383;
            color: white;
            @media screen and (max-width: 500px){
                box-shadow: inset 0px -240px 0px -164px  #27C383;
            }  
            
        }
        
    }

`
