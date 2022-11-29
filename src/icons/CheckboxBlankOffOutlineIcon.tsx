import React, { FC, memo } from 'react';
import CheckboxBlankOffOutlineSvg from '../svg/checkbox-blank-off-outline.svg';

export interface ICheckboxBlankOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankOffOutlineIcon: FC<ICheckboxBlankOffOutlineIconProps> = memo(props => {
  return <CheckboxBlankOffOutlineSvg {...props} />;
});
