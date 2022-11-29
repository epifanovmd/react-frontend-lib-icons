import React, { FC, memo } from 'react';
import ArrowRightBoldBoxOutlineSvg from '../svg/arrow-right-bold-box-outline.svg';

export interface IArrowRightBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldBoxOutlineIcon: FC<IArrowRightBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowRightBoldBoxOutlineSvg {...props} />;
});
