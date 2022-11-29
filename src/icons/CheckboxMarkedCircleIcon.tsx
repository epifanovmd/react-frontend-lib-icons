import React, { FC, memo } from 'react';
import CheckboxMarkedCircleSvg from '../svg/checkbox-marked-circle.svg';

export interface ICheckboxMarkedCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxMarkedCircleIcon: FC<ICheckboxMarkedCircleIconProps> = memo(props => {
  return <CheckboxMarkedCircleSvg {...props} />;
});
