import React, { FC, memo } from 'react';
import ChevronLeftCircleSvg from '../svg/chevron-left-circle.svg';

export interface IChevronLeftCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronLeftCircleIcon: FC<IChevronLeftCircleIconProps> = memo(props => {
  return <ChevronLeftCircleSvg {...props} />;
});
