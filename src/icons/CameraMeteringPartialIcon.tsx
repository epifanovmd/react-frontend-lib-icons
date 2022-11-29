import React, { FC, memo } from 'react';
import CameraMeteringPartialSvg from '../svg/camera-metering-partial.svg';

export interface ICameraMeteringPartialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CameraMeteringPartialIcon: FC<ICameraMeteringPartialIconProps> = memo(props => {
  return <CameraMeteringPartialSvg {...props} />;
});
