import React, { FC, memo } from 'react';
import PhoneClassicSvg from '../svg/phone-classic.svg';

export interface IPhoneClassicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneClassicIcon: FC<IPhoneClassicIconProps> = memo(props => {
  return <PhoneClassicSvg {...props} />;
});
