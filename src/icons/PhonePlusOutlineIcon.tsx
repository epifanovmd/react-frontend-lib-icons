import React, { FC, memo } from 'react';
import PhonePlusOutlineSvg from '../svg/phone-plus-outline.svg';

export interface IPhonePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhonePlusOutlineIcon: FC<IPhonePlusOutlineIconProps> = memo(props => {
  return <PhonePlusOutlineSvg {...props} />;
});
