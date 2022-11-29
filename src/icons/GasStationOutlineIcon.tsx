import React, { FC, memo } from 'react';
import GasStationOutlineSvg from '../svg/gas-station-outline.svg';

export interface IGasStationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GasStationOutlineIcon: FC<IGasStationOutlineIconProps> = memo(props => {
  return <GasStationOutlineSvg {...props} />;
});
