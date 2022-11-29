import React, { FC, memo } from 'react';
import DatabaseAlertOutlineSvg from '../svg/database-alert-outline.svg';

export interface IDatabaseAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseAlertOutlineIcon: FC<IDatabaseAlertOutlineIconProps> = memo(props => {
  return <DatabaseAlertOutlineSvg {...props} />;
});
