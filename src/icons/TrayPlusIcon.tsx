import React, { FC, memo } from 'react';
import TrayPlusSvg from '../svg/tray-plus.svg';

export interface ITrayPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayPlusIcon: FC<ITrayPlusIconProps> = memo(props => {
  return <TrayPlusSvg {...props} />;
});
