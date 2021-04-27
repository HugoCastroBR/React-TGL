import React, { Fragment } from 'react';
import Footer from './Footer';
import styled  from 'styled-components';
import Fonts from './../styles/fonts.js';
import Header from './Header';





const MainStyle = styled.main`
    ${Fonts}
    width: 100vw;
    min-height: calc(100vh - 80px);
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`


type PageProps = {
    headerVisible?: boolean;
    footerVisible?: boolean;
}

const Page:React.FC<PageProps> = ({children,footerVisible = true, headerVisible = true}) => {
    return(
        <Fragment>
            {headerVisible && <Header/>}
            <MainStyle>
                {children}
            </MainStyle>
            {footerVisible && <Footer/>}
        </Fragment>
    )
}

export default Page;