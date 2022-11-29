import React, { FC, memo } from 'react';
import ArrowExpandRightSvg from '../svg/arrow-expand-right.svg';

export interface IArrowExpandRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandRightIcon: FC<IArrowExpandRightIconProps> = memo(props => {
  return <ArrowExpandRightSvg {...props} />;
});
