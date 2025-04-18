import { ComponentProps } from "react"

import styled from "styled-components";

import { theme } from "../../styles/theme";

const ButtonContainer = styled.button`

    position: relative;
    transform: translateY(25%);
    width: 12.375rem;
    height: 3.125rem;

    background-color: ${theme.colors.primary};
    color: white;

    font-size: 1.25rem;
    font-weight: 600;

    border: none;
    border-radius: 20px;
    

    cursor: pointer;
`;

interface ButtonProps extends ComponentProps<'button'> {

    textButton: string;
}

export const Button = ({textButton, ...props  }: ButtonProps) => {

    return (

        <ButtonContainer {...props }>{ textButton }</ButtonContainer>
    )
}