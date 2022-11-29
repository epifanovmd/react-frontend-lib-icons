import React, { FC, memo } from 'react';
import DatabaseSearchSvg from '../svg/database-search.svg';

export interface IDatabaseSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseSearchIcon: FC<IDatabaseSearchIconProps> = memo(props => {
  return <DatabaseSearchSvg {...props} />;
});
