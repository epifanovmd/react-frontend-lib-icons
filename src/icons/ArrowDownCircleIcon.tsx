import React, { FC, memo } from 'react';
import ArrowDownCircleSvg from '../svg/arrow-down-circle.svg';

export interface IArrowDownCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownCircleIcon: FC<IArrowDownCircleIconProps> = memo(props => {
  return <ArrowDownCircleSvg {...props} />;
});
