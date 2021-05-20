import React from 'react';

import SimpleButton from '../../../components/buttons/arrowButton';
import { Link } from 'react-router-dom';
import useTGL from '../../../hooks/useStore';
import { AuthLogout } from '../../../store/actions'
import { ButtonContainer, HeaderContainer, HeaderStyle, LogoContainer } from './style';



const Header = ({WithHomeBtn = true}:{WithHomeBtn?:boolean}) => {

    const { dispatch } = useTGL()

    return(
        <HeaderStyle>
            <HeaderContainer>
                <div>
                    <LogoContainer>
                        <h1>TGL</h1>
                    </LogoContainer>
                    {WithHomeBtn && <Link to="/">Home</Link>}
                </div>
                <ButtonContainer>
                    <Link to="/account"><SimpleButton Arrow={false} > Account </SimpleButton></Link>
                    <Link to="/login" onClick={() => dispatch(AuthLogout())}><SimpleButton Arrow={true}> Log out </SimpleButton></Link>
                </ButtonContainer>  
            </HeaderContainer>  
        </HeaderStyle>
    )
}

export default Header;