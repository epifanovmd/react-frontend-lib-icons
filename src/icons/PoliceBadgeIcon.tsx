import React, { FC, memo } from 'react';
import PoliceBadgeSvg from '../svg/police-badge.svg';

export interface IPoliceBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoliceBadgeIcon: FC<IPoliceBadgeIconProps> = memo(props => {
  return <PoliceBadgeSvg {...props} />;
});
