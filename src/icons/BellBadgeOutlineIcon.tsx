import React, { FC, memo } from 'react';
import BellBadgeOutlineSvg from '../svg/bell-badge-outline.svg';

export interface IBellBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellBadgeOutlineIcon: FC<IBellBadgeOutlineIconProps> = memo(props => {
  return <BellBadgeOutlineSvg {...props} />;
});
