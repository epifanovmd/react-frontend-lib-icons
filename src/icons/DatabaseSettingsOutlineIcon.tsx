import React, { FC, memo } from 'react';
import DatabaseSettingsOutlineSvg from '../svg/database-settings-outline.svg';

export interface IDatabaseSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseSettingsOutlineIcon: FC<IDatabaseSettingsOutlineIconProps> = memo(props => {
  return <DatabaseSettingsOutlineSvg {...props} />;
});
