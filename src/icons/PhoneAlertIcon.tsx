import React, { FC, memo } from 'react';
import PhoneAlertSvg from '../svg/phone-alert.svg';

export interface IPhoneAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneAlertIcon: FC<IPhoneAlertIconProps> = memo(props => {
  return <PhoneAlertSvg {...props} />;
});
