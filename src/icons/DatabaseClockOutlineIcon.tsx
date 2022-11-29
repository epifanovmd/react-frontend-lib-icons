import React, { FC, memo } from 'react';
import DatabaseClockOutlineSvg from '../svg/database-clock-outline.svg';

export interface IDatabaseClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseClockOutlineIcon: FC<IDatabaseClockOutlineIconProps> = memo(props => {
  return <DatabaseClockOutlineSvg {...props} />;
});
