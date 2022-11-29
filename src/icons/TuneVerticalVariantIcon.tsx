import React, { FC, memo } from 'react';
import TuneVerticalVariantSvg from '../svg/tune-vertical-variant.svg';

export interface ITuneVerticalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TuneVerticalVariantIcon: FC<ITuneVerticalVariantIconProps> = memo(props => {
  return <TuneVerticalVariantSvg {...props} />;
});
