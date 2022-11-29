import React, { FC, memo } from 'react';
import DatabaseSyncOutlineSvg from '../svg/database-sync-outline.svg';

export interface IDatabaseSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseSyncOutlineIcon: FC<IDatabaseSyncOutlineIconProps> = memo(props => {
  return <DatabaseSyncOutlineSvg {...props} />;
});
