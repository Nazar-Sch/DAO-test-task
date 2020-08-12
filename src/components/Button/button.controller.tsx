import React from 'react'
import { ButtonItem } from './button.view'

interface PropsToButton {
    onSubmitClick(): void,
    disabled: boolean
} 

const Button: React.FC<PropsToButton> = ({ onSubmitClick, disabled }) => (
    <ButtonItem onClick={onSubmitClick} disabled={disabled}>До кошика</ButtonItem>
)

export default Button;
