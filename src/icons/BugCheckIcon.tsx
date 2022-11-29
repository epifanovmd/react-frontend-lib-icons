import React, { FC, memo } from 'react';
import BugCheckSvg from '../svg/bug-check.svg';

export interface IBugCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugCheckIcon: FC<IBugCheckIconProps> = memo(props => {
  return <BugCheckSvg {...props} />;
});
