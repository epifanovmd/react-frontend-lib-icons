import React, { FC, memo } from 'react';
import FacebookGamingSvg from '../svg/facebook-gaming.svg';

export interface IFacebookGamingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FacebookGamingIcon: FC<IFacebookGamingIconProps> = memo(props => {
  return <FacebookGamingSvg {...props} />;
});
