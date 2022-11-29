import React, { FC, memo } from 'react';
import PhoneClockSvg from '../svg/phone-clock.svg';

export interface IPhoneClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneClockIcon: FC<IPhoneClockIconProps> = memo(props => {
  return <PhoneClockSvg {...props} />;
});
