import React, { FC, memo } from 'react';
import TrayFullSvg from '../svg/tray-full.svg';

export interface ITrayFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayFullIcon: FC<ITrayFullIconProps> = memo(props => {
  return <TrayFullSvg {...props} />;
});
