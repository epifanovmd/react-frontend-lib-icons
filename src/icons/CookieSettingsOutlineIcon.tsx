import React, { FC, memo } from 'react';
import CookieSettingsOutlineSvg from '../svg/cookie-settings-outline.svg';

export interface ICookieSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CookieSettingsOutlineIcon: FC<ICookieSettingsOutlineIconProps> = memo(props => {
  return <CookieSettingsOutlineSvg {...props} />;
});
