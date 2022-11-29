import React, { FC, memo } from 'react';
import ArrowTopRightThickSvg from '../svg/arrow-top-right-thick.svg';

export interface IArrowTopRightThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightThickIcon: FC<IArrowTopRightThickIconProps> = memo(props => {
  return <ArrowTopRightThickSvg {...props} />;
});
