import React, { FC, memo } from 'react';
import PotSteamSvg from '../svg/pot-steam.svg';

export interface IPotSteamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PotSteamIcon: FC<IPotSteamIconProps> = memo(props => {
  return <PotSteamSvg {...props} />;
});
