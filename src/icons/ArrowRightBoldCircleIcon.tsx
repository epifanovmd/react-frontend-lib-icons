import React, { FC, memo } from 'react';
import ArrowRightBoldCircleSvg from '../svg/arrow-right-bold-circle.svg';

export interface IArrowRightBoldCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldCircleIcon: FC<IArrowRightBoldCircleIconProps> = memo(props => {
  return <ArrowRightBoldCircleSvg {...props} />;
});
