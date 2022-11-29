import React, { FC, memo } from 'react';
import ArrowUpCircleSvg from '../svg/arrow-up-circle.svg';

export interface IArrowUpCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpCircleIcon: FC<IArrowUpCircleIconProps> = memo(props => {
  return <ArrowUpCircleSvg {...props} />;
});
