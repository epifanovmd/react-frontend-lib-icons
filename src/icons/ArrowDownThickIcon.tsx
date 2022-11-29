import React, { FC, memo } from 'react';
import ArrowDownThickSvg from '../svg/arrow-down-thick.svg';

export interface IArrowDownThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownThickIcon: FC<IArrowDownThickIconProps> = memo(props => {
  return <ArrowDownThickSvg {...props} />;
});
