import React, { FC, memo } from 'react';
import PhoneRingOutlineSvg from '../svg/phone-ring-outline.svg';

export interface IPhoneRingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRingOutlineIcon: FC<IPhoneRingOutlineIconProps> = memo(props => {
  return <PhoneRingOutlineSvg {...props} />;
});
