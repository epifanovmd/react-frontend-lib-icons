import React, { FC, memo } from 'react';
import PowershellSvg from '../svg/powershell.svg';

export interface IPowershellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowershellIcon: FC<IPowershellIconProps> = memo(props => {
  return <PowershellSvg {...props} />;
});
