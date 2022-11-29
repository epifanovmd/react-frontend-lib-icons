import React, { FC, memo } from 'react';
import DesktopTowerSvg from '../svg/desktop-tower.svg';

export interface IDesktopTowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DesktopTowerIcon: FC<IDesktopTowerIconProps> = memo(props => {
  return <DesktopTowerSvg {...props} />;
});
