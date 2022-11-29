import React, { FC, memo } from 'react';
import SignalDistanceVariantSvg from '../svg/signal-distance-variant.svg';

export interface ISignalDistanceVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalDistanceVariantIcon: FC<ISignalDistanceVariantIconProps> = memo(props => {
  return <SignalDistanceVariantSvg {...props} />;
});
