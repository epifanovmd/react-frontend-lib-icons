import React, { FC, memo } from 'react';
import ArrowUpBoldCircleSvg from '../svg/arrow-up-bold-circle.svg';

export interface IArrowUpBoldCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldCircleIcon: FC<IArrowUpBoldCircleIconProps> = memo(props => {
  return <ArrowUpBoldCircleSvg {...props} />;
});
