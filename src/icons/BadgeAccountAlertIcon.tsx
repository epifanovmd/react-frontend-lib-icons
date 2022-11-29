import React, { FC, memo } from 'react';
import BadgeAccountAlertSvg from '../svg/badge-account-alert.svg';

export interface IBadgeAccountAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadgeAccountAlertIcon: FC<IBadgeAccountAlertIconProps> = memo(props => {
  return <BadgeAccountAlertSvg {...props} />;
});
