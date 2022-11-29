import React, { FC, memo } from 'react';
import GasStationOffOutlineSvg from '../svg/gas-station-off-outline.svg';

export interface IGasStationOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GasStationOffOutlineIcon: FC<IGasStationOffOutlineIconProps> = memo(props => {
  return <GasStationOffOutlineSvg {...props} />;
});
