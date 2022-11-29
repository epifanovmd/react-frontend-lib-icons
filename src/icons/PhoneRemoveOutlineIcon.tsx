import React, { FC, memo } from 'react';
import PhoneRemoveOutlineSvg from '../svg/phone-remove-outline.svg';

export interface IPhoneRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRemoveOutlineIcon: FC<IPhoneRemoveOutlineIconProps> = memo(props => {
  return <PhoneRemoveOutlineSvg {...props} />;
});
