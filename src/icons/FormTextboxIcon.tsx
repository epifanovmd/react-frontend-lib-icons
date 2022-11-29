import React, { FC, memo } from 'react';
import FormTextboxSvg from '../svg/form-textbox.svg';

export interface IFormTextboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormTextboxIcon: FC<IFormTextboxIconProps> = memo(props => {
  return <FormTextboxSvg {...props} />;
});
