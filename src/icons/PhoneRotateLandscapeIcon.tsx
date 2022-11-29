import React, { FC, memo } from 'react';
import PhoneRotateLandscapeSvg from '../svg/phone-rotate-landscape.svg';

export interface IPhoneRotateLandscapeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRotateLandscapeIcon: FC<IPhoneRotateLandscapeIconProps> = memo(props => {
  return <PhoneRotateLandscapeSvg {...props} />;
});
