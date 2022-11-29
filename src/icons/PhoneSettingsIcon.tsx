import React, { FC, memo } from 'react';
import PhoneSettingsSvg from '../svg/phone-settings.svg';

export interface IPhoneSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneSettingsIcon: FC<IPhoneSettingsIconProps> = memo(props => {
  return <PhoneSettingsSvg {...props} />;
});
