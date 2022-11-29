import React, { FC, memo } from 'react';
import PhoneVoipSvg from '../svg/phone-voip.svg';

export interface IPhoneVoipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneVoipIcon: FC<IPhoneVoipIconProps> = memo(props => {
  return <PhoneVoipSvg {...props} />;
});
