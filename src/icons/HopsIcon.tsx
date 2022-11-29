import React, { FC, memo } from 'react';
import HopsSvg from '../svg/hops.svg';

export interface IHopsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HopsIcon: FC<IHopsIconProps> = memo(props => {
  return <HopsSvg {...props} />;
});
