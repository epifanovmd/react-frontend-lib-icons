import React, { FC, memo } from 'react';
import KettleSteamOutlineSvg from '../svg/kettle-steam-outline.svg';

export interface IKettleSteamOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleSteamOutlineIcon: FC<IKettleSteamOutlineIconProps> = memo(props => {
  return <KettleSteamOutlineSvg {...props} />;
});
