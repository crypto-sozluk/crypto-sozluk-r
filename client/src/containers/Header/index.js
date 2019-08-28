import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import Menu from '../../components/Menu';

const StyledNav = styled.nav`
    background: white;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

class Header extends React.Component {
    render(){
        return(
            <StyledNav>
                <StyledContainer>
                    <Menu>
                        <Menu.Item>
                            Crypto Sozluk
                        </Menu.Item>
                    </Menu>
                    <Menu>
                        <Menu.Item>
                            <Link to="/login">Giris Yap</Link>
                        </Menu.Item>
                    </Menu>
                    <Menu>
                        <Menu.Item>
                            <Link to="/register">Uye ol</Link>
                        </Menu.Item>
                    </Menu>
                </StyledContainer>
            </StyledNav>
        )
    }
}

export default Header;