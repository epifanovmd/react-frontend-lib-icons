import React, { FC, memo } from 'react';
import PhoneSvg from '../svg/phone.svg';

export interface IPhoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneIcon: FC<IPhoneIconProps> = memo(props => {
  return <PhoneSvg {...props} />;
});
