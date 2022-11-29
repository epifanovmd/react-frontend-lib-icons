import React, { FC, memo } from 'react';
import BellAlertSvg from '../svg/bell-alert.svg';

export interface IBellAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellAlertIcon: FC<IBellAlertIconProps> = memo(props => {
  return <BellAlertSvg {...props} />;
});
