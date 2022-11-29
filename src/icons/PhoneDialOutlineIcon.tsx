import React, { FC, memo } from 'react';
import PhoneDialOutlineSvg from '../svg/phone-dial-outline.svg';

export interface IPhoneDialOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneDialOutlineIcon: FC<IPhoneDialOutlineIconProps> = memo(props => {
  return <PhoneDialOutlineSvg {...props} />;
});
