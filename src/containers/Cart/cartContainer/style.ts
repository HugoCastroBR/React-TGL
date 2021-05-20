import styled from 'styled-components';

export const CartContainerStyle = styled.div`

    width: 316px;
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    overflow: hidden;

`
export const SaveButton = styled.div`
    height: 96px;
    display: flex;
    justify-content: center;
    align-items: center;
    font: italic normal bold 35px "Helvetica Neue Bold";
    letter-spacing: 0px;
    color: #27C383;
    background: #F4F4F4;
    border: 0px;
    border-top: 1px solid #E2E2E2;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        transition: 0.3s;
        background: #e6e9e8;
    }
`

export const CartItemsContainer = styled.div`
    padding: 32px 16px 0px 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 50vh;
    overflow-y: auto;
    & h2{
        margin: 0px;
        width: 100%;
        margin-bottom: 36px;
        font: italic normal bold 24px "Helvetica Neue Bold";
        letter-spacing: 0px;
        color: #707070;
        text-transform: uppercase;
    }
`


export const EmptyCartAlert = styled.span`
    font: italic normal bold 28px "Helvetica Neue Bold";
    color: #a3a3a3;
    margin-bottom: 32px;
`

export const CartTotalText = styled.div`
    display: flex;
    margin-top: 40px;
    margin-bottom: 8px;
    width: auto;
    margin-left: 16px;
    text-transform: uppercase;

    & :first-child{
        font: italic normal bold 24px "Helvetica Neue Bold" ;
        color: #707070;
    }

    & :last-child{
        margin-top: 1px;
        margin-left: 12px;
        font: normal normal normal 26px "Helvetica Neue Light" ;
        
        color: #707070;
    }
`

export const CartClosedContainer = styled.div`
    
    width: 100%;
`
export const CartClosed = styled.button`

    border: none;
    background-color: transparent;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: italic normal bold 16px "Helvetica Neue Bold" ;
    color: #707070;
    margin-top: -26px;
    & h2{ 
        
        margin: 0px;
        text-align: left;
        text-transform: uppercase;
    }
    cursor: pointer;
`




export const SaveErrorMsg = styled.span<{color:string}>`
    font: italic normal bold 16px "Helvetica Neue Light" ;
    width: 100%;
    height: 20px;
    text-align: center;
    margin-bottom: 10px;
    color: ${props => `${props.color}`};
`