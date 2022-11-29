import React, { FC, memo } from 'react';
import DatabaseExportOutlineSvg from '../svg/database-export-outline.svg';

export interface IDatabaseExportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseExportOutlineIcon: FC<IDatabaseExportOutlineIconProps> = memo(props => {
  return <DatabaseExportOutlineSvg {...props} />;
});
