import React, { FC, memo } from 'react';
import FileSettingsSvg from '../svg/file-settings.svg';

export interface IFileSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileSettingsIcon: FC<IFileSettingsIconProps> = memo(props => {
  return <FileSettingsSvg {...props} />;
});
