import React, { FC, memo } from 'react';
import DatabaseSvg from '../svg/database.svg';

export interface IDatabaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseIcon: FC<IDatabaseIconProps> = memo(props => {
  return <DatabaseSvg {...props} />;
});
