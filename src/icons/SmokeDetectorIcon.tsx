import React, { FC, memo } from 'react';
import SmokeDetectorSvg from '../svg/smoke-detector.svg';

export interface ISmokeDetectorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorIcon: FC<ISmokeDetectorIconProps> = memo(props => {
  return <SmokeDetectorSvg {...props} />;
});
