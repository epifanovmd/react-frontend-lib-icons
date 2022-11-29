import React, { FC, memo } from 'react';
import DatabaseArrowDownSvg from '../svg/database-arrow-down.svg';

export interface IDatabaseArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowDownIcon: FC<IDatabaseArrowDownIconProps> = memo(props => {
  return <DatabaseArrowDownSvg {...props} />;
});
