import React, { FC, memo } from 'react';
import ArrowLeftCircleSvg from '../svg/arrow-left-circle.svg';

export interface IArrowLeftCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftCircleIcon: FC<IArrowLeftCircleIconProps> = memo(props => {
  return <ArrowLeftCircleSvg {...props} />;
});
