import React, { FC, memo } from 'react';
import DatabaseImportOutlineSvg from '../svg/database-import-outline.svg';

export interface IDatabaseImportOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseImportOutlineIcon: FC<IDatabaseImportOutlineIconProps> = memo(props => {
  return <DatabaseImportOutlineSvg {...props} />;
});
