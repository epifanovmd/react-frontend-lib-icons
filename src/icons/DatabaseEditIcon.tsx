import React, { FC, memo } from 'react';
import DatabaseEditSvg from '../svg/database-edit.svg';

export interface IDatabaseEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseEditIcon: FC<IDatabaseEditIconProps> = memo(props => {
  return <DatabaseEditSvg {...props} />;
});
