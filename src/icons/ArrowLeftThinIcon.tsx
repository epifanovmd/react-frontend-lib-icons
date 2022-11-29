import React, { FC, memo } from 'react';
import ArrowLeftThinSvg from '../svg/arrow-left-thin.svg';

export interface IArrowLeftThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftThinIcon: FC<IArrowLeftThinIconProps> = memo(props => {
  return <ArrowLeftThinSvg {...props} />;
});
