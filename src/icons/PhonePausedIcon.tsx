import React, { FC, memo } from 'react';
import PhonePausedSvg from '../svg/phone-paused.svg';

export interface IPhonePausedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhonePausedIcon: FC<IPhonePausedIconProps> = memo(props => {
  return <PhonePausedSvg {...props} />;
});
