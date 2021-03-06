import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import { InputText, LabelContainer, InputContainer } from './styles';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  background?: string;
  color?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  label: string;
  type: string;
}

const Input: FC<IProps> = ({
  background = '#ffffff', color = '#000000', iconStart, iconEnd, label, type, ...rest
}) => (
  <label>
    <LabelContainer>{label}</LabelContainer>
    <InputContainer>
      <div>{iconStart}</div>
      <InputText background={background} color={color} {...rest} />
      <div>{iconEnd}</div>
    </InputContainer>
  </label>
);

export default Input;
