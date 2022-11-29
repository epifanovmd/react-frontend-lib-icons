import React, { FC, memo } from 'react';
import PhoneClassicOffSvg from '../svg/phone-classic-off.svg';

export interface IPhoneClassicOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneClassicOffIcon: FC<IPhoneClassicOffIconProps> = memo(props => {
  return <PhoneClassicOffSvg {...props} />;
});
