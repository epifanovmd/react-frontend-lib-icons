import React, { FC, memo } from 'react';
import HydrogenStationSvg from '../svg/hydrogen-station.svg';

export interface IHydrogenStationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HydrogenStationIcon: FC<IHydrogenStationIconProps> = memo(props => {
  return <HydrogenStationSvg {...props} />;
});
