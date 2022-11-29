import React, { FC, memo } from 'react';
import SmokeDetectorVariantOffSvg from '../svg/smoke-detector-variant-off.svg';

export interface ISmokeDetectorVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorVariantOffIcon: FC<ISmokeDetectorVariantOffIconProps> = memo(props => {
  return <SmokeDetectorVariantOffSvg {...props} />;
});
