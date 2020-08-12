import styled from 'styled-components'

interface PropsToStyledButton {
    disabled?: boolean
}

export const ButtonItem = styled.div<PropsToStyledButton>`
    background-color: #6CA22C;
    max-width: 137px;
    text-align: center;
    margin-left: 16px;
    padding: 16px;
    font-size: 16px;
    border-radius: 8px;
    color: #ffffff;
    cursor: pointer;
    opacity: ${({ disabled }) => disabled ? '0.5 ': '1'}
`;
