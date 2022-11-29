import React, { FC, memo } from 'react';
import PhoneMinusSvg from '../svg/phone-minus.svg';

export interface IPhoneMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneMinusIcon: FC<IPhoneMinusIconProps> = memo(props => {
  return <PhoneMinusSvg {...props} />;
});
