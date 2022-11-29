import React, { FC, memo } from 'react';
import CameraMeteringCenterSvg from '../svg/camera-metering-center.svg';

export interface ICameraMeteringCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraMeteringCenterIcon: FC<ICameraMeteringCenterIconProps> = memo(props => {
  return <CameraMeteringCenterSvg {...props} />;
});
