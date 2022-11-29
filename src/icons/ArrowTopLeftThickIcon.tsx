import React, { FC, memo } from 'react';
import ArrowTopLeftThickSvg from '../svg/arrow-top-left-thick.svg';

export interface IArrowTopLeftThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftThickIcon: FC<IArrowTopLeftThickIconProps> = memo(props => {
  return <ArrowTopLeftThickSvg {...props} />;
});
