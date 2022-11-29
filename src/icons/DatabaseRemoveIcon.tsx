import React, { FC, memo } from 'react';
import DatabaseRemoveSvg from '../svg/database-remove.svg';

export interface IDatabaseRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseRemoveIcon: FC<IDatabaseRemoveIconProps> = memo(props => {
  return <DatabaseRemoveSvg {...props} />;
});
