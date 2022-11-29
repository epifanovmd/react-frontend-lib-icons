import React, { FC, memo } from 'react';
import BadgeAccountHorizontalOutlineSvg from '../svg/badge-account-horizontal-outline.svg';

export interface IBadgeAccountHorizontalOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadgeAccountHorizontalOutlineIcon: FC<IBadgeAccountHorizontalOutlineIconProps> = memo(props => {
  return <BadgeAccountHorizontalOutlineSvg {...props} />;
});
