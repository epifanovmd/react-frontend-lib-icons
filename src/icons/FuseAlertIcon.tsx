import React, { FC, memo } from 'react';
import FuseAlertSvg from '../svg/fuse-alert.svg';

export interface IFuseAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuseAlertIcon: FC<IFuseAlertIconProps> = memo(props => {
  return <FuseAlertSvg {...props} />;
});
