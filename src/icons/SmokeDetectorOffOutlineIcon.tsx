import React, { FC, memo } from 'react';
import SmokeDetectorOffOutlineSvg from '../svg/smoke-detector-off-outline.svg';

export interface ISmokeDetectorOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorOffOutlineIcon: FC<ISmokeDetectorOffOutlineIconProps> = memo(props => {
  return <SmokeDetectorOffOutlineSvg {...props} />;
});
