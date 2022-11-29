import React, { FC, memo } from 'react';
import PhoneAlertOutlineSvg from '../svg/phone-alert-outline.svg';

export interface IPhoneAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneAlertOutlineIcon: FC<IPhoneAlertOutlineIconProps> = memo(props => {
  return <PhoneAlertOutlineSvg {...props} />;
});
