import React, { FC, memo } from 'react';
import BugPlaySvg from '../svg/bug-play.svg';

export interface IBugPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugPlayIcon: FC<IBugPlayIconProps> = memo(props => {
  return <BugPlaySvg {...props} />;
});
