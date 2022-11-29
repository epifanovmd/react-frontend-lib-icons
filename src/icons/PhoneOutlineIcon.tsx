import React, { FC, memo } from 'react';
import PhoneOutlineSvg from '../svg/phone-outline.svg';

export interface IPhoneOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneOutlineIcon: FC<IPhoneOutlineIconProps> = memo(props => {
  return <PhoneOutlineSvg {...props} />;
});
