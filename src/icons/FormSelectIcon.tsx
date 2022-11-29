import React, { FC, memo } from 'react';
import FormSelectSvg from '../svg/form-select.svg';

export interface IFormSelectIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormSelectIcon: FC<IFormSelectIconProps> = memo(props => {
  return <FormSelectSvg {...props} />;
});
