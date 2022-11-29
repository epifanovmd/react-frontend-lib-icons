import React, { FC, memo } from 'react';
import PoliceBadgeOutlineSvg from '../svg/police-badge-outline.svg';

export interface IPoliceBadgeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PoliceBadgeOutlineIcon: FC<IPoliceBadgeOutlineIconProps> = memo(props => {
  return <PoliceBadgeOutlineSvg {...props} />;
});
