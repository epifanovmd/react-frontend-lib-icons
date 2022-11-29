import React, { FC, memo } from 'react';
import BugOutlineSvg from '../svg/bug-outline.svg';

export interface IBugOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugOutlineIcon: FC<IBugOutlineIconProps> = memo(props => {
  return <BugOutlineSvg {...props} />;
});
