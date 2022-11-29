import React, { FC, memo } from 'react';
import SpaceStationSvg from '../svg/space-station.svg';

export interface ISpaceStationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpaceStationIcon: FC<ISpaceStationIconProps> = memo(props => {
  return <SpaceStationSvg {...props} />;
});
