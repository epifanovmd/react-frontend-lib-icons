import React, { FC, memo } from 'react';
import NintendoGameBoySvg from '../svg/nintendo-game-boy.svg';

export interface INintendoGameBoyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NintendoGameBoyIcon: FC<INintendoGameBoyIconProps> = memo(props => {
  return <NintendoGameBoySvg {...props} />;
});
