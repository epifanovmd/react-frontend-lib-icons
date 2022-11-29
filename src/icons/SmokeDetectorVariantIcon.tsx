import React, { FC, memo } from 'react';
import SmokeDetectorVariantSvg from '../svg/smoke-detector-variant.svg';

export interface ISmokeDetectorVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorVariantIcon: FC<ISmokeDetectorVariantIconProps> = memo(props => {
  return <SmokeDetectorVariantSvg {...props} />;
});
