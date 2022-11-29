import React, { FC, memo } from 'react';
import DatabaseOffSvg from '../svg/database-off.svg';

export interface IDatabaseOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseOffIcon: FC<IDatabaseOffIconProps> = memo(props => {
  return <DatabaseOffSvg {...props} />;
});
