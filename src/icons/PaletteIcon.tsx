import React, { FC, memo } from 'react';
import PaletteSvg from '../svg/palette.svg';

export interface IPaletteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PaletteIcon: FC<IPaletteIconProps> = memo(props => {
  return <PaletteSvg {...props} />;
});
