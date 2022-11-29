import React, { FC, memo } from 'react';
import SettingsHelperSvg from '../svg/settings-helper.svg';

export interface ISettingsHelperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SettingsHelperIcon: FC<ISettingsHelperIconProps> = memo(props => {
  return <SettingsHelperSvg {...props} />;
});
