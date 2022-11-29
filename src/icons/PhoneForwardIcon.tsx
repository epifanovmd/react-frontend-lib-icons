import React, { FC, memo } from 'react';
import PhoneForwardSvg from '../svg/phone-forward.svg';

export interface IPhoneForwardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneForwardIcon: FC<IPhoneForwardIconProps> = memo(props => {
  return <PhoneForwardSvg {...props} />;
});
