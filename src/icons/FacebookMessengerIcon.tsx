import React, { FC, memo } from 'react';
import FacebookMessengerSvg from '../svg/facebook-messenger.svg';

export interface IFacebookMessengerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FacebookMessengerIcon: FC<IFacebookMessengerIconProps> = memo(props => {
  return <FacebookMessengerSvg {...props} />;
});
