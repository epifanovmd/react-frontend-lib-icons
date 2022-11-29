import React, { FC, memo } from 'react';
import ArrowRightBoldSvg from '../svg/arrow-right-bold.svg';

export interface IArrowRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldIcon: FC<IArrowRightBoldIconProps> = memo(props => {
  return <ArrowRightBoldSvg {...props} />;
});
