import React, { FC, memo } from 'react';
import TempleBuddhistOutlineSvg from '../svg/temple-buddhist-outline.svg';

export interface ITempleBuddhistOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TempleBuddhistOutlineIcon: FC<ITempleBuddhistOutlineIconProps> = memo(props => {
  return <TempleBuddhistOutlineSvg {...props} />;
});
