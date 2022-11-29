import React, { FC, memo } from 'react';
import ArrowRightTopBoldSvg from '../svg/arrow-right-top-bold.svg';

export interface IArrowRightTopBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightTopBoldIcon: FC<IArrowRightTopBoldIconProps> = memo(props => {
  return <ArrowRightTopBoldSvg {...props} />;
});
