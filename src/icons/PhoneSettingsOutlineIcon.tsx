import React, { FC, memo } from 'react';
import PhoneSettingsOutlineSvg from '../svg/phone-settings-outline.svg';

export interface IPhoneSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneSettingsOutlineIcon: FC<IPhoneSettingsOutlineIconProps> = memo(props => {
  return <PhoneSettingsOutlineSvg {...props} />;
});
