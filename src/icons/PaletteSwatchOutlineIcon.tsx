import React, { FC, memo } from 'react';
import PaletteSwatchOutlineSvg from '../svg/palette-swatch-outline.svg';

export interface IPaletteSwatchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaletteSwatchOutlineIcon: FC<IPaletteSwatchOutlineIconProps> = memo(props => {
  return <PaletteSwatchOutlineSvg {...props} />;
});
