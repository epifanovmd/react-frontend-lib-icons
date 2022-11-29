import React, { FC, memo } from 'react';
import PhoneOffSvg from '../svg/phone-off.svg';

export interface IPhoneOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneOffIcon: FC<IPhoneOffIconProps> = memo(props => {
  return <PhoneOffSvg {...props} />;
});
