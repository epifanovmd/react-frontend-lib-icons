import React, { FC, memo } from 'react';
import DatabaseMinusSvg from '../svg/database-minus.svg';

export interface IDatabaseMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseMinusIcon: FC<IDatabaseMinusIconProps> = memo(props => {
  return <DatabaseMinusSvg {...props} />;
});
