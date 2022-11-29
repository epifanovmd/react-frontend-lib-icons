import React, { FC, memo } from 'react';
import GasStationSvg from '../svg/gas-station.svg';

export interface IGasStationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GasStationIcon: FC<IGasStationIconProps> = memo(props => {
  return <GasStationSvg {...props} />;
});
