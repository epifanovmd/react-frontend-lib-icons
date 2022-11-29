import React, { FC, memo } from 'react';
import ArrowDownBoldCircleSvg from '../svg/arrow-down-bold-circle.svg';

export interface IArrowDownBoldCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldCircleIcon: FC<IArrowDownBoldCircleIconProps> = memo(props => {
  return <ArrowDownBoldCircleSvg {...props} />;
});
