import React, { FC, memo } from 'react';
import PhoneOffOutlineSvg from '../svg/phone-off-outline.svg';

export interface IPhoneOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneOffOutlineIcon: FC<IPhoneOffOutlineIconProps> = memo(props => {
  return <PhoneOffOutlineSvg {...props} />;
});
