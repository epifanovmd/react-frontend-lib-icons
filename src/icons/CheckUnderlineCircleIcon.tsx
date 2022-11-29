import React, { FC, memo } from 'react';
import CheckUnderlineCircleSvg from '../svg/check-underline-circle.svg';

export interface ICheckUnderlineCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckUnderlineCircleIcon: FC<ICheckUnderlineCircleIconProps> = memo(props => {
  return <CheckUnderlineCircleSvg {...props} />;
});
