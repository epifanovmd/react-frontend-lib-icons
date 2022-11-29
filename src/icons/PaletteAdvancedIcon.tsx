import React, { FC, memo } from 'react';
import PaletteAdvancedSvg from '../svg/palette-advanced.svg';

export interface IPaletteAdvancedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaletteAdvancedIcon: FC<IPaletteAdvancedIconProps> = memo(props => {
  return <PaletteAdvancedSvg {...props} />;
});
