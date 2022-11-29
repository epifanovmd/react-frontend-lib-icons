import React, { FC, memo } from 'react';
import ArrowTopRightBoldBoxOutlineSvg from '../svg/arrow-top-right-bold-box-outline.svg';

export interface IArrowTopRightBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightBoldBoxOutlineIcon: FC<IArrowTopRightBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowTopRightBoldBoxOutlineSvg {...props} />;
});
