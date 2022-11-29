import React, { FC, memo } from 'react';
import ArrowDownDropCircleSvg from '../svg/arrow-down-drop-circle.svg';

export interface IArrowDownDropCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownDropCircleIcon: FC<IArrowDownDropCircleIconProps> = memo(props => {
  return <ArrowDownDropCircleSvg {...props} />;
});
