import styled from 'styled-components';

export const AuthErrorTextStyle = styled.p<{messageColor:string}>`
    margin: 0px;
    display: block;
    height: 32px;
    min-width: 100px;
    text-align: center;
    color: ${props => `${props.messageColor}`};
    font:  normal  14px "Helvetica Neue Roman";
    margin-bottom: 5px;
`