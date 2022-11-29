import React, { FC, memo } from 'react';
import PhonePlusSvg from '../svg/phone-plus.svg';

export interface IPhonePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhonePlusIcon: FC<IPhonePlusIconProps> = memo(props => {
  return <PhonePlusSvg {...props} />;
});
