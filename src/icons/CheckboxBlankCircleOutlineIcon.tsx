import React, { FC, memo } from 'react';
import CheckboxBlankCircleOutlineSvg from '../svg/checkbox-blank-circle-outline.svg';

export interface ICheckboxBlankCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankCircleOutlineIcon: FC<ICheckboxBlankCircleOutlineIconProps> = memo(props => {
  return <CheckboxBlankCircleOutlineSvg {...props} />;
});
