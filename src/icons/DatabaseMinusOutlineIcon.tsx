import React, { FC, memo } from 'react';
import DatabaseMinusOutlineSvg from '../svg/database-minus-outline.svg';

export interface IDatabaseMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DatabaseMinusOutlineIcon: FC<IDatabaseMinusOutlineIconProps> = memo(props => {
  return <DatabaseMinusOutlineSvg {...props} />;
});
