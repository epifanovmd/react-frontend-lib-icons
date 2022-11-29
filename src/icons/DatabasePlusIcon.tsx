import React, { FC, memo } from 'react';
import DatabasePlusSvg from '../svg/database-plus.svg';

export interface IDatabasePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabasePlusIcon: FC<IDatabasePlusIconProps> = memo(props => {
  return <DatabasePlusSvg {...props} />;
});
