import React, { FC, memo } from 'react';
import CheckCircleSvg from '../svg/check-circle.svg';

export interface ICheckCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckCircleIcon: FC<ICheckCircleIconProps> = memo(props => {
  return <CheckCircleSvg {...props} />;
});
