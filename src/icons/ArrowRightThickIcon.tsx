import React, { FC, memo } from 'react';
import ArrowRightThickSvg from '../svg/arrow-right-thick.svg';

export interface IArrowRightThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightThickIcon: FC<IArrowRightThickIconProps> = memo(props => {
  return <ArrowRightThickSvg {...props} />;
});
