import React, { FC, memo } from 'react';
import ArrowUpBoldBoxOutlineSvg from '../svg/arrow-up-bold-box-outline.svg';

export interface IArrowUpBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldBoxOutlineIcon: FC<IArrowUpBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowUpBoldBoxOutlineSvg {...props} />;
});
