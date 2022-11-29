import React, { FC, memo } from 'react';
import ArrowRightThinSvg from '../svg/arrow-right-thin.svg';

export interface IArrowRightThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightThinIcon: FC<IArrowRightThinIconProps> = memo(props => {
  return <ArrowRightThinSvg {...props} />;
});
