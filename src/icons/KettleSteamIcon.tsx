import React, { FC, memo } from 'react';
import KettleSteamSvg from '../svg/kettle-steam.svg';

export interface IKettleSteamIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleSteamIcon: FC<IKettleSteamIconProps> = memo(props => {
  return <KettleSteamSvg {...props} />;
});
