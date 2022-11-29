import React, { FC, memo } from 'react';
import ArrowTopRightBoldOutlineSvg from '../svg/arrow-top-right-bold-outline.svg';

export interface IArrowTopRightBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightBoldOutlineIcon: FC<IArrowTopRightBoldOutlineIconProps> = memo(props => {
  return <ArrowTopRightBoldOutlineSvg {...props} />;
});
