import React, { FC, memo } from 'react';
import ArrowUpDownBoldSvg from '../svg/arrow-up-down-bold.svg';

export interface IArrowUpDownBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpDownBoldIcon: FC<IArrowUpDownBoldIconProps> = memo(props => {
  return <ArrowUpDownBoldSvg {...props} />;
});
