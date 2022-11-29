import React, { FC, memo } from 'react';
import DatabaseClockSvg from '../svg/database-clock.svg';

export interface IDatabaseClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseClockIcon: FC<IDatabaseClockIconProps> = memo(props => {
  return <DatabaseClockSvg {...props} />;
});
