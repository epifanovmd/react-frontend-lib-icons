import React, { FC, memo } from 'react';
import SteamSvg from '../svg/steam.svg';

export interface ISteamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SteamIcon: FC<ISteamIconProps> = memo(props => {
  return <SteamSvg {...props} />;
});
