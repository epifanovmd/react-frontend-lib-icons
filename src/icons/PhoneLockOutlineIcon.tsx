import React, { FC, memo } from 'react';
import PhoneLockOutlineSvg from '../svg/phone-lock-outline.svg';

export interface IPhoneLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneLockOutlineIcon: FC<IPhoneLockOutlineIconProps> = memo(props => {
  return <PhoneLockOutlineSvg {...props} />;
});
