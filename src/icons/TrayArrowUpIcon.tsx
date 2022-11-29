import React, { FC, memo } from 'react';
import TrayArrowUpSvg from '../svg/tray-arrow-up.svg';

export interface ITrayArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayArrowUpIcon: FC<ITrayArrowUpIconProps> = memo(props => {
  return <TrayArrowUpSvg {...props} />;
});
