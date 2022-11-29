import React, { FC, memo } from 'react';
import CheckboxBlankOffSvg from '../svg/checkbox-blank-off.svg';

export interface ICheckboxBlankOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankOffIcon: FC<ICheckboxBlankOffIconProps> = memo(props => {
  return <CheckboxBlankOffSvg {...props} />;
});
