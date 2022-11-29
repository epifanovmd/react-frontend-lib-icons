import React, { FC, memo } from 'react';
import SmokeDetectorAlertSvg from '../svg/smoke-detector-alert.svg';

export interface ISmokeDetectorAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorAlertIcon: FC<ISmokeDetectorAlertIconProps> = memo(props => {
  return <SmokeDetectorAlertSvg {...props} />;
});
