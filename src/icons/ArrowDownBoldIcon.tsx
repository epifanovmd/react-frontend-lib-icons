import React, { FC, memo } from 'react';
import ArrowDownBoldSvg from '../svg/arrow-down-bold.svg';

export interface IArrowDownBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldIcon: FC<IArrowDownBoldIconProps> = memo(props => {
  return <ArrowDownBoldSvg {...props} />;
});
