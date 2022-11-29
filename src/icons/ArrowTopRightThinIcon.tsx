import React, { FC, memo } from 'react';
import ArrowTopRightThinSvg from '../svg/arrow-top-right-thin.svg';

export interface IArrowTopRightThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightThinIcon: FC<IArrowTopRightThinIconProps> = memo(props => {
  return <ArrowTopRightThinSvg {...props} />;
});
