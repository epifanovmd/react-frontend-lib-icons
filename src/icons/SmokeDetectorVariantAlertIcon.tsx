import React, { FC, memo } from 'react';
import SmokeDetectorVariantAlertSvg from '../svg/smoke-detector-variant-alert.svg';

export interface ISmokeDetectorVariantAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorVariantAlertIcon: FC<ISmokeDetectorVariantAlertIconProps> = memo(props => {
  return <SmokeDetectorVariantAlertSvg {...props} />;
});
