import React, { FC, memo } from 'react';
import PhoneRemoveSvg from '../svg/phone-remove.svg';

export interface IPhoneRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneRemoveIcon: FC<IPhoneRemoveIconProps> = memo(props => {
  return <PhoneRemoveSvg {...props} />;
});
