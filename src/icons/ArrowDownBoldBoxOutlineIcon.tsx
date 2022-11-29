import React, { FC, memo } from 'react';
import ArrowDownBoldBoxOutlineSvg from '../svg/arrow-down-bold-box-outline.svg';

export interface IArrowDownBoldBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldBoxOutlineIcon: FC<IArrowDownBoldBoxOutlineIconProps> = memo(props => {
  return <ArrowDownBoldBoxOutlineSvg {...props} />;
});
