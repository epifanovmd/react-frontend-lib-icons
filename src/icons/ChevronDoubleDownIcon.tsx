import React, { FC, memo } from 'react';
import ChevronDoubleDownSvg from '../svg/chevron-double-down.svg';

export interface IChevronDoubleDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDoubleDownIcon: FC<IChevronDoubleDownIconProps> = memo(props => {
  return <ChevronDoubleDownSvg {...props} />;
});
