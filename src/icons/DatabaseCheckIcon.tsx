import React, { FC, memo } from 'react';
import DatabaseCheckSvg from '../svg/database-check.svg';

export interface IDatabaseCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseCheckIcon: FC<IDatabaseCheckIconProps> = memo(props => {
  return <DatabaseCheckSvg {...props} />;
});
