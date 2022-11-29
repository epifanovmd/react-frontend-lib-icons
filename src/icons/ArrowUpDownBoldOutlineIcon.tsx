import React, { FC, memo } from 'react';
import ArrowUpDownBoldOutlineSvg from '../svg/arrow-up-down-bold-outline.svg';

export interface IArrowUpDownBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpDownBoldOutlineIcon: FC<IArrowUpDownBoldOutlineIconProps> = memo(props => {
  return <ArrowUpDownBoldOutlineSvg {...props} />;
});
