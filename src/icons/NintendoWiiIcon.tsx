import React, { FC, memo } from 'react';
import NintendoWiiSvg from '../svg/nintendo-wii.svg';

export interface INintendoWiiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NintendoWiiIcon: FC<INintendoWiiIconProps> = memo(props => {
  return <NintendoWiiSvg {...props} />;
});
