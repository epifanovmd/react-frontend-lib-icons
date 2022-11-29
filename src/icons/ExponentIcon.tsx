import React, { FC, memo } from 'react';
import ExponentSvg from '../svg/exponent.svg';

export interface IExponentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExponentIcon: FC<IExponentIconProps> = memo(props => {
  return <ExponentSvg {...props} />;
});
