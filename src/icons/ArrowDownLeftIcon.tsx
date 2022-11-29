import React, { FC, memo } from 'react';
import ArrowDownLeftSvg from '../svg/arrow-down-left.svg';

export interface IArrowDownLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownLeftIcon: FC<IArrowDownLeftIconProps> = memo(props => {
  return <ArrowDownLeftSvg {...props} />;
});
