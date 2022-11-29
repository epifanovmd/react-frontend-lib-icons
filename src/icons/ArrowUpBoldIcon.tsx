import React, { FC, memo } from 'react';
import ArrowUpBoldSvg from '../svg/arrow-up-bold.svg';

export interface IArrowUpBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldIcon: FC<IArrowUpBoldIconProps> = memo(props => {
  return <ArrowUpBoldSvg {...props} />;
});
