import styled from 'styled-components';

export const ButtonText = styled.span<{ Color: String }>`
    color: ${props => `${props.Color}`};
    font-size: 35px;
`