import React, { FC, memo } from 'react';
import SimSvg from '../svg/sim.svg';

export interface ISimIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SimIcon: FC<ISimIconProps> = memo(props => {
  return <SimSvg {...props} />;
});
