import React, { FC, memo } from 'react';
import HeadAlertSvg from '../svg/head-alert.svg';

export interface IHeadAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadAlertIcon: FC<IHeadAlertIconProps> = memo(props => {
  return <HeadAlertSvg {...props} />;
});
