import React, { FC, memo } from 'react';
import PaletteSwatchVariantSvg from '../svg/palette-swatch-variant.svg';

export interface IPaletteSwatchVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaletteSwatchVariantIcon: FC<IPaletteSwatchVariantIconProps> = memo(props => {
  return <PaletteSwatchVariantSvg {...props} />;
});
