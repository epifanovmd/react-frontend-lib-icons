import React, { FC, memo } from 'react';
import NintendoWiiuSvg from '../svg/nintendo-wiiu.svg';

export interface INintendoWiiuIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NintendoWiiuIcon: FC<INintendoWiiuIconProps> = memo(props => {
  return <NintendoWiiuSvg {...props} />;
});
