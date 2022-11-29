import React, { FC, memo } from 'react';
import KettleAlertSvg from '../svg/kettle-alert.svg';

export interface IKettleAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KettleAlertIcon: FC<IKettleAlertIconProps> = memo(props => {
  return <KettleAlertSvg {...props} />;
});
