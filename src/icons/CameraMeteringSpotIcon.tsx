import React, { FC, memo } from 'react';
import CameraMeteringSpotSvg from '../svg/camera-metering-spot.svg';

export interface ICameraMeteringSpotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraMeteringSpotIcon: FC<ICameraMeteringSpotIconProps> = memo(props => {
  return <CameraMeteringSpotSvg {...props} />;
});
