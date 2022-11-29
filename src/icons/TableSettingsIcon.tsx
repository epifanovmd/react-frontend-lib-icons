import React, { FC, memo } from 'react';
import TableSettingsSvg from '../svg/table-settings.svg';

export interface ITableSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TableSettingsIcon: FC<ITableSettingsIconProps> = memo(props => {
  return <TableSettingsSvg {...props} />;
});
