import React, { FC, memo } from 'react';
import ArrowLeftTopBoldSvg from '../svg/arrow-left-top-bold.svg';

export interface IArrowLeftTopBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftTopBoldIcon: FC<IArrowLeftTopBoldIconProps> = memo(props => {
  return <ArrowLeftTopBoldSvg {...props} />;
});
