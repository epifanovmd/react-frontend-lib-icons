import React, { FC, memo } from 'react';
import VanPassengerSvg from '../svg/van-passenger.svg';

export interface IVanPassengerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VanPassengerIcon: FC<IVanPassengerIconProps> = memo(props => {
  return <VanPassengerSvg {...props} />;
});
