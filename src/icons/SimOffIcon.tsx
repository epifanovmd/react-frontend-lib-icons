import React, { FC, memo } from 'react';
import SimOffSvg from '../svg/sim-off.svg';

export interface ISimOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimOffIcon: FC<ISimOffIconProps> = memo(props => {
  return <SimOffSvg {...props} />;
});
