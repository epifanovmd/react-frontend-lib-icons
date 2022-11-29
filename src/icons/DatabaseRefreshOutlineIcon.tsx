import React, { FC, memo } from 'react';
import DatabaseRefreshOutlineSvg from '../svg/database-refresh-outline.svg';

export interface IDatabaseRefreshOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseRefreshOutlineIcon: FC<IDatabaseRefreshOutlineIconProps> = memo(props => {
  return <DatabaseRefreshOutlineSvg {...props} />;
});
