import React, { FC, memo } from 'react';
import PhoneRingSvg from '../svg/phone-ring.svg';

export interface IPhoneRingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRingIcon: FC<IPhoneRingIconProps> = memo(props => {
  return <PhoneRingSvg {...props} />;
});
