import React, { FC, memo } from 'react';
import DatabaseOutlineSvg from '../svg/database-outline.svg';

export interface IDatabaseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseOutlineIcon: FC<IDatabaseOutlineIconProps> = memo(props => {
  return <DatabaseOutlineSvg {...props} />;
});
