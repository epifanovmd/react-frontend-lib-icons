import React, { FC, memo } from 'react';
import EyeSettingsSvg from '../svg/eye-settings.svg';

export interface IEyeSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeSettingsIcon: FC<IEyeSettingsIconProps> = memo(props => {
  return <EyeSettingsSvg {...props} />;
});
