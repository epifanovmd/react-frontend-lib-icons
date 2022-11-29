import React, { FC, memo } from 'react';
import ArrowUpThinSvg from '../svg/arrow-up-thin.svg';

export interface IArrowUpThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpThinIcon: FC<IArrowUpThinIconProps> = memo(props => {
  return <ArrowUpThinSvg {...props} />;
});
