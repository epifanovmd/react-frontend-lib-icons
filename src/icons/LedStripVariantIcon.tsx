import React, { FC, memo } from 'react';
import LedStripVariantSvg from '../svg/led-strip-variant.svg';

export interface ILedStripVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedStripVariantIcon: FC<ILedStripVariantIconProps> = memo(props => {
  return <LedStripVariantSvg {...props} />;
});
