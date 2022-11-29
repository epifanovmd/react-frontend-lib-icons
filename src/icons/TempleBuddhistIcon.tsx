import React, { FC, memo } from 'react';
import TempleBuddhistSvg from '../svg/temple-buddhist.svg';

export interface ITempleBuddhistIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TempleBuddhistIcon: FC<ITempleBuddhistIconProps> = memo(props => {
  return <TempleBuddhistSvg {...props} />;
});
