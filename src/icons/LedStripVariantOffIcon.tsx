import React, { FC, memo } from 'react';
import LedStripVariantOffSvg from '../svg/led-strip-variant-off.svg';

export interface ILedStripVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedStripVariantOffIcon: FC<ILedStripVariantOffIconProps> = memo(props => {
  return <LedStripVariantOffSvg {...props} />;
});
