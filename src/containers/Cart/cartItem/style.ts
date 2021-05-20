import styled  from 'styled-components';

type CartItemProps = {
    color: string
}

export const CartItemStyle = styled.div`
    display: flex;
    width: 284px;
    min-height: 60px;
    margin-top: 16px;
    margin-bottom: 16px;
`

export const DeleteContainer = styled.div`
    width: 34px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & button{
        cursor: pointer;
        background-color: transparent;
        border: 0px;

        & svg{
            transition: 0.5s;
        }
        & svg:hover{
            transition: 0.5s;
            fill: red;
        }
        & svg:active{
            transition: 0.5s;
            fill: red;
        }
    }
`



export const ItemInfosContainer = styled.div<CartItemProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 280px;
    border-left: 4px solid ${props => `${props.color}`};
    border-radius: 4px 0px 0px 4px;
    padding-left: 12px;
`

export const ItemInfosNumbers = styled.span`
    text-align: left;
    font: italic normal bold 15px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #868686;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    height: auto;
    width: 228px;
    margin-bottom: 6px;
`

export const GameTypePriceContainer = styled.div`
    width: 228px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
`


export const GameTypeText = styled.span<CartItemProps>`
    display: flex;
    min-width: 80px;
    padding-right: 8px;
    text-align: center;
    font: italic normal bold 16px "Helvetica Neue Bold";
    color: ${props => `${props.color}`};

`

export const GamePriceText = styled.span`
    text-align: left;
    font: normal normal normal 16px"Helvetica Neue Bold";
    color: #868686;

`
