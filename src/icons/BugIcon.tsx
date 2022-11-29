import React, { FC, memo } from 'react';
import BugSvg from '../svg/bug.svg';

export interface IBugIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugIcon: FC<IBugIconProps> = memo(props => {
  return <BugSvg {...props} />;
});
