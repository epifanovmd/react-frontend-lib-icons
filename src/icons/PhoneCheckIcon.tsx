import React, { FC, memo } from 'react';
import PhoneCheckSvg from '../svg/phone-check.svg';

export interface IPhoneCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneCheckIcon: FC<IPhoneCheckIconProps> = memo(props => {
  return <PhoneCheckSvg {...props} />;
});
