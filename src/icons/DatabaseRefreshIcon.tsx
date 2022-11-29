import React, { FC, memo } from 'react';
import DatabaseRefreshSvg from '../svg/database-refresh.svg';

export interface IDatabaseRefreshIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseRefreshIcon: FC<IDatabaseRefreshIconProps> = memo(props => {
  return <DatabaseRefreshSvg {...props} />;
});
