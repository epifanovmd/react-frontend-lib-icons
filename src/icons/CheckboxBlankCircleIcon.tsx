import React, { FC, memo } from 'react';
import CheckboxBlankCircleSvg from '../svg/checkbox-blank-circle.svg';

export interface ICheckboxBlankCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxBlankCircleIcon: FC<ICheckboxBlankCircleIconProps> = memo(props => {
  return <CheckboxBlankCircleSvg {...props} />;
});
