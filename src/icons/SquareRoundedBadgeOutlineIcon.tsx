import React, { FC, memo } from 'react';
import SquareRoundedBadgeOutlineSvg from '../svg/square-rounded-badge-outline.svg';

export interface ISquareRoundedBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareRoundedBadgeOutlineIcon: FC<ISquareRoundedBadgeOutlineIconProps> = memo(props => {
  return <SquareRoundedBadgeOutlineSvg {...props} />;
});
