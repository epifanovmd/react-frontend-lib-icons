import React, { FC, memo } from 'react';
import DatabaseLockOutlineSvg from '../svg/database-lock-outline.svg';

export interface IDatabaseLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseLockOutlineIcon: FC<IDatabaseLockOutlineIconProps> = memo(props => {
  return <DatabaseLockOutlineSvg {...props} />;
});
