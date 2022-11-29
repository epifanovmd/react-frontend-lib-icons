import React, { FC, memo } from 'react';
import ArrowDownThinSvg from '../svg/arrow-down-thin.svg';

export interface IArrowDownThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownThinIcon: FC<IArrowDownThinIconProps> = memo(props => {
  return <ArrowDownThinSvg {...props} />;
});
