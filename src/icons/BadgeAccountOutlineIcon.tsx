import React, { FC, memo } from 'react';
import BadgeAccountOutlineSvg from '../svg/badge-account-outline.svg';

export interface IBadgeAccountOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BadgeAccountOutlineIcon: FC<IBadgeAccountOutlineIconProps> = memo(props => {
  return <BadgeAccountOutlineSvg {...props} />;
});
