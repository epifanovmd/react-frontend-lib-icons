import React, { FC, memo } from 'react';
import PhoneRotatePortraitSvg from '../svg/phone-rotate-portrait.svg';

export interface IPhoneRotatePortraitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRotatePortraitIcon: FC<IPhoneRotatePortraitIconProps> = memo(props => {
  return <PhoneRotatePortraitSvg {...props} />;
});
