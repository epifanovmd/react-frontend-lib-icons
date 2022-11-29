import React, { FC, memo } from 'react';
import DatabaseArrowUpSvg from '../svg/database-arrow-up.svg';

export interface IDatabaseArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseArrowUpIcon: FC<IDatabaseArrowUpIconProps> = memo(props => {
  return <DatabaseArrowUpSvg {...props} />;
});
