import React, { FC, memo } from 'react';
import CheckboxOutlineSvg from '../svg/checkbox-outline.svg';

export interface ICheckboxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxOutlineIcon: FC<ICheckboxOutlineIconProps> = memo(props => {
  return <CheckboxOutlineSvg {...props} />;
});
