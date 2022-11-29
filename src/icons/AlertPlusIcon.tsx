import React, { FC, memo } from 'react';
import AlertPlusSvg from '../svg/alert-plus.svg';

export interface IAlertPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertPlusIcon: FC<IAlertPlusIconProps> = memo(props => {
  return <AlertPlusSvg {...props} />;
});
