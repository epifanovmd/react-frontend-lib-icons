import React, { FC, memo } from 'react';
import SquareRoundedBadgeSvg from '../svg/square-rounded-badge.svg';

export interface ISquareRoundedBadgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareRoundedBadgeIcon: FC<ISquareRoundedBadgeIconProps> = memo(props => {
  return <SquareRoundedBadgeSvg {...props} />;
});
