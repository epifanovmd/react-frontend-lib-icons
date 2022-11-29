import React, { FC, memo } from 'react';
import DatabaseSearchOutlineSvg from '../svg/database-search-outline.svg';

export interface IDatabaseSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseSearchOutlineIcon: FC<IDatabaseSearchOutlineIconProps> = memo(props => {
  return <DatabaseSearchOutlineSvg {...props} />;
});
