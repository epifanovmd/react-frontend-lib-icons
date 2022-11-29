import React, { FC, memo } from 'react';
import ArrowLeftDropCircleSvg from '../svg/arrow-left-drop-circle.svg';

export interface IArrowLeftDropCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftDropCircleIcon: FC<IArrowLeftDropCircleIconProps> = memo(props => {
  return <ArrowLeftDropCircleSvg {...props} />;
});
