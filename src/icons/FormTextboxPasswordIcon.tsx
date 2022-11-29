import React, { FC, memo } from 'react';
import FormTextboxPasswordSvg from '../svg/form-textbox-password.svg';

export interface IFormTextboxPasswordIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormTextboxPasswordIcon: FC<IFormTextboxPasswordIconProps> = memo(props => {
  return <FormTextboxPasswordSvg {...props} />;
});
