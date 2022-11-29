import React, { FC, memo } from 'react';
import PhoneCancelSvg from '../svg/phone-cancel.svg';

export interface IPhoneCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneCancelIcon: FC<IPhoneCancelIconProps> = memo(props => {
  return <PhoneCancelSvg {...props} />;
});
