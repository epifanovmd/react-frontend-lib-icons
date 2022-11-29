import React, { FC, memo } from 'react';
import ArrowRightBoldOutlineSvg from '../svg/arrow-right-bold-outline.svg';

export interface IArrowRightBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBoldOutlineIcon: FC<IArrowRightBoldOutlineIconProps> = memo(props => {
  return <ArrowRightBoldOutlineSvg {...props} />;
});
