import React, { FC, memo } from 'react';
import ArrowTopLeftThinSvg from '../svg/arrow-top-left-thin.svg';

export interface IArrowTopLeftThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftThinIcon: FC<IArrowTopLeftThinIconProps> = memo(props => {
  return <ArrowTopLeftThinSvg {...props} />;
});
