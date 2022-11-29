import React, { FC, memo } from 'react';
import HorseVariantSvg from '../svg/horse-variant.svg';

export interface IHorseVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorseVariantIcon: FC<IHorseVariantIconProps> = memo(props => {
  return <HorseVariantSvg {...props} />;
});
