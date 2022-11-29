import React, { FC, memo } from 'react';
import BugCheckOutlineSvg from '../svg/bug-check-outline.svg';

export interface IBugCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BugCheckOutlineIcon: FC<IBugCheckOutlineIconProps> = memo(props => {
  return <BugCheckOutlineSvg {...props} />;
});
