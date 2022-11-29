import React, { FC, memo } from 'react';
import BellBadgeSvg from '../svg/bell-badge.svg';

export interface IBellBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellBadgeIcon: FC<IBellBadgeIconProps> = memo(props => {
  return <BellBadgeSvg {...props} />;
});
