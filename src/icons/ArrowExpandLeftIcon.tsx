import React, { FC, memo } from 'react';
import ArrowExpandLeftSvg from '../svg/arrow-expand-left.svg';

export interface IArrowExpandLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandLeftIcon: FC<IArrowExpandLeftIconProps> = memo(props => {
  return <ArrowExpandLeftSvg {...props} />;
});
