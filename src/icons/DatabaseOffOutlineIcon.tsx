import React, { FC, memo } from 'react';
import DatabaseOffOutlineSvg from '../svg/database-off-outline.svg';

export interface IDatabaseOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseOffOutlineIcon: FC<IDatabaseOffOutlineIconProps> = memo(props => {
  return <DatabaseOffOutlineSvg {...props} />;
});
