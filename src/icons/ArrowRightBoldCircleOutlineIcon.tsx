import React, { FC, memo } from 'react';
import ArrowRightBoldCircleOutlineSvg from '../svg/arrow-right-bold-circle-outline.svg';

export interface IArrowRightBoldCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldCircleOutlineIcon: FC<IArrowRightBoldCircleOutlineIconProps> = memo(props => {
  return <ArrowRightBoldCircleOutlineSvg {...props} />;
});
