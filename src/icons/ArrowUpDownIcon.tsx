import React, { FC, memo } from 'react';
import ArrowUpDownSvg from '../svg/arrow-up-down.svg';

export interface IArrowUpDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpDownIcon: FC<IArrowUpDownIconProps> = memo(props => {
  return <ArrowUpDownSvg {...props} />;
});
