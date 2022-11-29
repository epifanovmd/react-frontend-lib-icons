import React, { FC, memo } from 'react';
import GridSvg from '../svg/grid.svg';

export interface IGridIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GridIcon: FC<IGridIconProps> = memo(props => {
  return <GridSvg {...props} />;
});
