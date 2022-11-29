import React, { FC, memo } from 'react';
import GasStationOffSvg from '../svg/gas-station-off.svg';

export interface IGasStationOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GasStationOffIcon: FC<IGasStationOffIconProps> = memo(props => {
  return <GasStationOffSvg {...props} />;
});
