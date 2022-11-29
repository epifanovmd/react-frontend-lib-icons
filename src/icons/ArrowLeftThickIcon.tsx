import React, { FC, memo } from 'react';
import ArrowLeftThickSvg from '../svg/arrow-left-thick.svg';

export interface IArrowLeftThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftThickIcon: FC<IArrowLeftThickIconProps> = memo(props => {
  return <ArrowLeftThickSvg {...props} />;
});
