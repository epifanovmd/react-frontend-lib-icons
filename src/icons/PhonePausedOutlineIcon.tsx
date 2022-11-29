import React, { FC, memo } from 'react';
import PhonePausedOutlineSvg from '../svg/phone-paused-outline.svg';

export interface IPhonePausedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhonePausedOutlineIcon: FC<IPhonePausedOutlineIconProps> = memo(props => {
  return <PhonePausedOutlineSvg {...props} />;
});
