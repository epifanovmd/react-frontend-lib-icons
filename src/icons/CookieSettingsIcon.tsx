import React, { FC, memo } from 'react';
import CookieSettingsSvg from '../svg/cookie-settings.svg';

export interface ICookieSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieSettingsIcon: FC<ICookieSettingsIconProps> = memo(props => {
  return <CookieSettingsSvg {...props} />;
});
