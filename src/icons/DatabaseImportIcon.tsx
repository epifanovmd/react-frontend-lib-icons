import React, { FC, memo } from 'react';
import DatabaseImportSvg from '../svg/database-import.svg';

export interface IDatabaseImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseImportIcon: FC<IDatabaseImportIconProps> = memo(props => {
  return <DatabaseImportSvg {...props} />;
});
