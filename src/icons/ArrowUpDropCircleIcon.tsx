import React, { FC, memo } from 'react';
import ArrowUpDropCircleSvg from '../svg/arrow-up-drop-circle.svg';

export interface IArrowUpDropCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpDropCircleIcon: FC<IArrowUpDropCircleIconProps> = memo(props => {
  return <ArrowUpDropCircleSvg {...props} />;
});
