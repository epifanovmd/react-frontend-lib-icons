import React, { FC, memo } from 'react';
import SyncAlertSvg from '../svg/sync-alert.svg';

export interface ISyncAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyncAlertIcon: FC<ISyncAlertIconProps> = memo(props => {
  return <SyncAlertSvg {...props} />;
});
