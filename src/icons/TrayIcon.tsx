import React, { FC, memo } from 'react';
import TraySvg from '../svg/tray.svg';

export interface ITrayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayIcon: FC<ITrayIconProps> = memo(props => {
  return <TraySvg {...props} />;
});
