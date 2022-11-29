import React, { FC, memo } from 'react';
import GridLargeSvg from '../svg/grid-large.svg';

export interface IGridLargeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GridLargeIcon: FC<IGridLargeIconProps> = memo(props => {
  return <GridLargeSvg {...props} />;
});
