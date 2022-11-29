import React, { FC, memo } from 'react';
import DatabaseSyncSvg from '../svg/database-sync.svg';

export interface IDatabaseSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseSyncIcon: FC<IDatabaseSyncIconProps> = memo(props => {
  return <DatabaseSyncSvg {...props} />;
});
