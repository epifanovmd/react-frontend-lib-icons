import React, { FC, memo } from 'react';
import TrayArrowDownSvg from '../svg/tray-arrow-down.svg';

export interface ITrayArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayArrowDownIcon: FC<ITrayArrowDownIconProps> = memo(props => {
  return <TrayArrowDownSvg {...props} />;
});
