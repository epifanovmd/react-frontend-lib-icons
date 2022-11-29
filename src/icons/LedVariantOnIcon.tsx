import React, { FC, memo } from 'react';
import LedVariantOnSvg from '../svg/led-variant-on.svg';

export interface ILedVariantOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedVariantOnIcon: FC<ILedVariantOnIconProps> = memo(props => {
  return <LedVariantOnSvg {...props} />;
});
