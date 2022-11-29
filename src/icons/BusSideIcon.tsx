import React, { FC, memo } from 'react';
import BusSideSvg from '../svg/bus-side.svg';

export interface IBusSideIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BusSideIcon: FC<IBusSideIconProps> = memo(props => {
  return <BusSideSvg {...props} />;
});
