import React, { FC, memo } from 'react';
import BadgeAccountSvg from '../svg/badge-account.svg';

export interface IBadgeAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadgeAccountIcon: FC<IBadgeAccountIconProps> = memo(props => {
  return <BadgeAccountSvg {...props} />;
});
