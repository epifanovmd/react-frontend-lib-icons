import React, { FC, memo } from 'react';
import EvStationSvg from '../svg/ev-station.svg';

export interface IEvStationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EvStationIcon: FC<IEvStationIconProps> = memo(props => {
  return <EvStationSvg {...props} />;
});
