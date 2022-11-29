import React, { FC, memo } from 'react';
import ArrowUpThickSvg from '../svg/arrow-up-thick.svg';

export interface IArrowUpThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpThickIcon: FC<IArrowUpThickIconProps> = memo(props => {
  return <ArrowUpThickSvg {...props} />;
});
