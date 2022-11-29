import React, { FC, memo } from 'react';
import DatabaseAlertSvg from '../svg/database-alert.svg';

export interface IDatabaseAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseAlertIcon: FC<IDatabaseAlertIconProps> = memo(props => {
  return <DatabaseAlertSvg {...props} />;
});
