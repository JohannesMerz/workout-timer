import { propOr } from 'ramda';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

export const StyledLink = styled(Link)`
  background-color: transparent;
  border: 2px solid ${propOr('var(--colorPrimary)', 'color')};
  border-radius: 15%;
  display: flex;
  padding: 3px;
  align-items: center;
  opacity: ${(props) => (props.disabled ? '0.33' : '1')};
`;

export function ButtonLink(props) {
  if (props.disabled) {
    return <Button {...props}>{props.children}</Button>;
  }
  return <StyledLink {...props}>{props.children}</StyledLink>;
}
