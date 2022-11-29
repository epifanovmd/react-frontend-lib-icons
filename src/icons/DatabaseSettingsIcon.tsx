import React, { FC, memo } from 'react';
import DatabaseSettingsSvg from '../svg/database-settings.svg';

export interface IDatabaseSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseSettingsIcon: FC<IDatabaseSettingsIconProps> = memo(props => {
  return <DatabaseSettingsSvg {...props} />;
});
