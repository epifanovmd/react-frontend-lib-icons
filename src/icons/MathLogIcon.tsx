import React, { FC, memo } from 'react';
import MathLogSvg from '../svg/math-log.svg';

export interface IMathLogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MathLogIcon: FC<IMathLogIconProps> = memo(props => {
  return <MathLogSvg {...props} />;
});
