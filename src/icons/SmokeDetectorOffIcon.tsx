import React, { FC, memo } from 'react';
import SmokeDetectorOffSvg from '../svg/smoke-detector-off.svg';

export interface ISmokeDetectorOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorOffIcon: FC<ISmokeDetectorOffIconProps> = memo(props => {
  return <SmokeDetectorOffSvg {...props} />;
});
