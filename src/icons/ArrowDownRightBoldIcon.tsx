import React, { FC, memo } from 'react';
import ArrowDownRightBoldSvg from '../svg/arrow-down-right-bold.svg';

export interface IArrowDownRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownRightBoldIcon: FC<IArrowDownRightBoldIconProps> = memo(props => {
  return <ArrowDownRightBoldSvg {...props} />;
});
