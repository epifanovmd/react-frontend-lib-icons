import React, { FC, memo } from 'react';
import DatabaseCheckOutlineSvg from '../svg/database-check-outline.svg';

export interface IDatabaseCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseCheckOutlineIcon: FC<IDatabaseCheckOutlineIconProps> = memo(props => {
  return <DatabaseCheckOutlineSvg {...props} />;
});
