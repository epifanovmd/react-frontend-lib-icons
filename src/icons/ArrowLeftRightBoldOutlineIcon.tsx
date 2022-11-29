import React, { FC, memo } from 'react';
import ArrowLeftRightBoldOutlineSvg from '../svg/arrow-left-right-bold-outline.svg';

export interface IArrowLeftRightBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftRightBoldOutlineIcon: FC<IArrowLeftRightBoldOutlineIconProps> = memo(props => {
  return <ArrowLeftRightBoldOutlineSvg {...props} />;
});
