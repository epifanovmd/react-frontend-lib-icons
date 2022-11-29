import React, { FC, memo } from 'react';
import ArrowRightCircleSvg from '../svg/arrow-right-circle.svg';

export interface IArrowRightCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightCircleIcon: FC<IArrowRightCircleIconProps> = memo(props => {
  return <ArrowRightCircleSvg {...props} />;
});
