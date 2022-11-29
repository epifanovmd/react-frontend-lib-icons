import React, { FC, memo } from 'react';
import LedVariantOutlineSvg from '../svg/led-variant-outline.svg';

export interface ILedVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LedVariantOutlineIcon: FC<ILedVariantOutlineIconProps> = memo(props => {
  return <LedVariantOutlineSvg {...props} />;
});
