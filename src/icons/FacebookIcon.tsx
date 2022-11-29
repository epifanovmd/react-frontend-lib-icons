import React, { FC, memo } from 'react';
import FacebookSvg from '../svg/facebook.svg';

export interface IFacebookIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FacebookIcon: FC<IFacebookIconProps> = memo(props => {
  return <FacebookSvg {...props} />;
});
