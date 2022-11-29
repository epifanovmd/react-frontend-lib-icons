import React, { FC, memo } from 'react';
import BadgeAccountAlertOutlineSvg from '../svg/badge-account-alert-outline.svg';

export interface IBadgeAccountAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadgeAccountAlertOutlineIcon: FC<IBadgeAccountAlertOutlineIconProps> = memo(props => {
  return <BadgeAccountAlertOutlineSvg {...props} />;
});
