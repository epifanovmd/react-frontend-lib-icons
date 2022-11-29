import React, { FC, memo } from 'react';
import PhoneLogSvg from '../svg/phone-log.svg';

export interface IPhoneLogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneLogIcon: FC<IPhoneLogIconProps> = memo(props => {
  return <PhoneLogSvg {...props} />;
});
