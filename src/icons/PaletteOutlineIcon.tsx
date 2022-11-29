import React, { FC, memo } from 'react';
import PaletteOutlineSvg from '../svg/palette-outline.svg';

export interface IPaletteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaletteOutlineIcon: FC<IPaletteOutlineIconProps> = memo(props => {
  return <PaletteOutlineSvg {...props} />;
});
