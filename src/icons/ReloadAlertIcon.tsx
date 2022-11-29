import React, { FC, memo } from 'react';
import ReloadAlertSvg from '../svg/reload-alert.svg';

export interface IReloadAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReloadAlertIcon: FC<IReloadAlertIconProps> = memo(props => {
  return <ReloadAlertSvg {...props} />;
});
