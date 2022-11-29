import React, { FC, memo } from 'react';
import PeanutOffSvg from '../svg/peanut-off.svg';

export interface IPeanutOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PeanutOffIcon: FC<IPeanutOffIconProps> = memo(props => {
  return <PeanutOffSvg {...props} />;
});
