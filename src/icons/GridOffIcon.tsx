import React, { FC, memo } from 'react';
import GridOffSvg from '../svg/grid-off.svg';

export interface IGridOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GridOffIcon: FC<IGridOffIconProps> = memo(props => {
  return <GridOffSvg {...props} />;
});
