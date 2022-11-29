import React, { FC, memo } from 'react';
import ChevronLeftSvg from '../svg/chevron-left.svg';

export interface IChevronLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronLeftIcon: FC<IChevronLeftIconProps> = memo(props => {
  return <ChevronLeftSvg {...props} />;
});
