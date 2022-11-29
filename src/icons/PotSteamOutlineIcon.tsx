import React, { FC, memo } from 'react';
import PotSteamOutlineSvg from '../svg/pot-steam-outline.svg';

export interface IPotSteamOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PotSteamOutlineIcon: FC<IPotSteamOutlineIconProps> = memo(props => {
  return <PotSteamOutlineSvg {...props} />;
});
