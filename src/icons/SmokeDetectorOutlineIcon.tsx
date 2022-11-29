import React, { FC, memo } from 'react';
import SmokeDetectorOutlineSvg from '../svg/smoke-detector-outline.svg';

export interface ISmokeDetectorOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorOutlineIcon: FC<ISmokeDetectorOutlineIconProps> = memo(props => {
  return <SmokeDetectorOutlineSvg {...props} />;
});
