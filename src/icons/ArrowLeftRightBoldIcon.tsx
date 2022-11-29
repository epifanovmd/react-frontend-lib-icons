import React, { FC, memo } from 'react';
import ArrowLeftRightBoldSvg from '../svg/arrow-left-right-bold.svg';

export interface IArrowLeftRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftRightBoldIcon: FC<IArrowLeftRightBoldIconProps> = memo(props => {
  return <ArrowLeftRightBoldSvg {...props} />;
});
