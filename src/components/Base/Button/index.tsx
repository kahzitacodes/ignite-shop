import { IconContext } from '@phosphor-icons/react';
import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

export function Button({ children, color = "primary", icon = false, size = "lg", className = "", ...rest }: ButtonProps) {
  const isIconOnly = icon ? "icon" : "";
  return (
    <ButtonContainer color={color} size={size} className={`${isIconOnly} ${className}`} {...rest}>
      <IconContext.Provider value={{ size: 24 }}>
        {children}
      </IconContext.Provider>
    </ButtonContainer>
  );
}