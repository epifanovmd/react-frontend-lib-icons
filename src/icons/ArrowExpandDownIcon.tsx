import React, { FC, memo } from 'react';
import ArrowExpandDownSvg from '../svg/arrow-expand-down.svg';

export interface IArrowExpandDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandDownIcon: FC<IArrowExpandDownIconProps> = memo(props => {
  return <ArrowExpandDownSvg {...props} />;
});
