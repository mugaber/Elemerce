import React, { useContext } from 'react';
import { auth } from '../../firebase/firebase.utils';

import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer
} from './header.styled';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../CartDropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';

import UserContext from '../../contexts/user/user.context';
import { CartContext } from '../../providers/cart/CartProvider';

//
const Header = () => {
  const currentUser = useContext(UserContext);
  const { hidden } = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/shop'>Contact</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign out</OptionDiv>
        ) : (
          <OptionLink to='/signin'>Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
