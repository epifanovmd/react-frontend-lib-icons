import React, { FC, memo } from 'react';
import ArchiveSettingsSvg from '../svg/archive-settings.svg';

export interface IArchiveSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArchiveSettingsIcon: FC<IArchiveSettingsIconProps> = memo(props => {
  return <ArchiveSettingsSvg {...props} />;
});
