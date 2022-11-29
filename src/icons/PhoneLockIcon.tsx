import React, { FC, memo } from 'react';
import PhoneLockSvg from '../svg/phone-lock.svg';

export interface IPhoneLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneLockIcon: FC<IPhoneLockIconProps> = memo(props => {
  return <PhoneLockSvg {...props} />;
});
