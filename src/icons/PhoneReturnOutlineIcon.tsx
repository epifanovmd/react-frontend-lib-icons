import React, { FC, memo } from 'react';
import PhoneReturnOutlineSvg from '../svg/phone-return-outline.svg';

export interface IPhoneReturnOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneReturnOutlineIcon: FC<IPhoneReturnOutlineIconProps> = memo(props => {
  return <PhoneReturnOutlineSvg {...props} />;
});
