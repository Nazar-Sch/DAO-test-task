import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

interface PropsToStyledButton {
    disabled?: boolean
}

export const ButtonItem = styled.div<PropsToStyledButton>`
    background-color: #6CA22C;
    text-align: center;
    display: flex;
    align-items: center;
    margin-left: 16px;
    padding: 16px;
    font-size: 16px;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    opacity: ${({ disabled }) => disabled ? '0.5 ': '1'};
`;

export const CartIcon = styled(ShoppingCartIcon)`
    margin-right: 8px;
`;
