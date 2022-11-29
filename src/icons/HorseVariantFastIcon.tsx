import React, { FC, memo } from 'react';
import HorseVariantFastSvg from '../svg/horse-variant-fast.svg';

export interface IHorseVariantFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorseVariantFastIcon: FC<IHorseVariantFastIconProps> = memo(props => {
  return <HorseVariantFastSvg {...props} />;
});
