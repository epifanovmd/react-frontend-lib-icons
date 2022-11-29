import React, { FC, memo } from 'react';
import ChevronDoubleLeftSvg from '../svg/chevron-double-left.svg';

export interface IChevronDoubleLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDoubleLeftIcon: FC<IChevronDoubleLeftIconProps> = memo(props => {
  return <ChevronDoubleLeftSvg {...props} />;
});
