import React, { FC, memo } from 'react';
import LedVariantOffSvg from '../svg/led-variant-off.svg';

export interface ILedVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedVariantOffIcon: FC<ILedVariantOffIconProps> = memo(props => {
  return <LedVariantOffSvg {...props} />;
});
