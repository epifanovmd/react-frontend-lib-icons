import React, { FC, memo } from 'react';
import ArrowUpRightBoldSvg from '../svg/arrow-up-right-bold.svg';

export interface IArrowUpRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpRightBoldIcon: FC<IArrowUpRightBoldIconProps> = memo(props => {
  return <ArrowUpRightBoldSvg {...props} />;
});
