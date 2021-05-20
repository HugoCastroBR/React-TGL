import React, { Fragment } from 'react';
import Footer from '../footer/Footer';
import Header from '../../../containers/partials/header';
import { MainStyle } from './style';







type PageProps = {
    headerVisible?: boolean;
    footerVisible?: boolean;
    WithHomeBtn?: boolean
}

const Page = ({children,footerVisible = true, headerVisible = true,WithHomeBtn = true}:PageProps & {children:React.ReactNode}) => {
    return(
        <Fragment>
            {headerVisible && <Header WithHomeBtn={WithHomeBtn}/>}
            <MainStyle>
                {children}
            </MainStyle>
            {footerVisible && <Footer/>}
        </Fragment>
    )
}

export default Page;