import React, { FC, memo } from 'react';
import BugPlayOutlineSvg from '../svg/bug-play-outline.svg';

export interface IBugPlayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugPlayOutlineIcon: FC<IBugPlayOutlineIconProps> = memo(props => {
  return <BugPlayOutlineSvg {...props} />;
});
