import React, { FC, memo } from 'react';
import ArrowLeftBottomBoldSvg from '../svg/arrow-left-bottom-bold.svg';

export interface IArrowLeftBottomBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBottomBoldIcon: FC<IArrowLeftBottomBoldIconProps> = memo(props => {
  return <ArrowLeftBottomBoldSvg {...props} />;
});
