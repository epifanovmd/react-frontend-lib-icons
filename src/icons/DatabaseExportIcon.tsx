import React, { FC, memo } from 'react';
import DatabaseExportSvg from '../svg/database-export.svg';

export interface IDatabaseExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseExportIcon: FC<IDatabaseExportIconProps> = memo(props => {
  return <DatabaseExportSvg {...props} />;
});
