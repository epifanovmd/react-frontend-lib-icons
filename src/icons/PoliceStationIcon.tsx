import React, { FC, memo } from 'react';
import PoliceStationSvg from '../svg/police-station.svg';

export interface IPoliceStationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoliceStationIcon: FC<IPoliceStationIconProps> = memo(props => {
  return <PoliceStationSvg {...props} />;
});
