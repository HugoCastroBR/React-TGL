import styled from 'styled-components';

export const NewBetPageContainer = styled.div`
    width: 100vw;
    max-width: 1200px;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;

    @media screen and (max-width: 1200px){
        align-items: center;
        flex-direction: column-reverse;
    }
`
