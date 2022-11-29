import React, { FC, memo } from 'react';
import PhoneLogOutlineSvg from '../svg/phone-log-outline.svg';

export interface IPhoneLogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneLogOutlineIcon: FC<IPhoneLogOutlineIconProps> = memo(props => {
  return <PhoneLogOutlineSvg {...props} />;
});
