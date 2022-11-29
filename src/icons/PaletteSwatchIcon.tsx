import React, { FC, memo } from 'react';
import PaletteSwatchSvg from '../svg/palette-swatch.svg';

export interface IPaletteSwatchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaletteSwatchIcon: FC<IPaletteSwatchIconProps> = memo(props => {
  return <PaletteSwatchSvg {...props} />;
});
