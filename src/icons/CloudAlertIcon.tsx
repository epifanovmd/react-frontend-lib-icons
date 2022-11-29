import React, { FC, memo } from 'react';
import CloudAlertSvg from '../svg/cloud-alert.svg';

export interface ICloudAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudAlertIcon: FC<ICloudAlertIconProps> = memo(props => {
  return <CloudAlertSvg {...props} />;
});
