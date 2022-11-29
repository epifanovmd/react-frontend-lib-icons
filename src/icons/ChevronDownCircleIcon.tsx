import React, { FC, memo } from 'react';
import ChevronDownCircleSvg from '../svg/chevron-down-circle.svg';

export interface IChevronDownCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDownCircleIcon: FC<IChevronDownCircleIconProps> = memo(props => {
  return <ChevronDownCircleSvg {...props} />;
});
