import React, { FC, memo } from 'react';
import SignalVariantSvg from '../svg/signal-variant.svg';

export interface ISignalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignalVariantIcon: FC<ISignalVariantIconProps> = memo(props => {
  return <SignalVariantSvg {...props} />;
});
