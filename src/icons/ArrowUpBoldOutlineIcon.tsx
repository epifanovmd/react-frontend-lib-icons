import React, { FC, memo } from 'react';
import ArrowUpBoldOutlineSvg from '../svg/arrow-up-bold-outline.svg';

export interface IArrowUpBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldOutlineIcon: FC<IArrowUpBoldOutlineIconProps> = memo(props => {
  return <ArrowUpBoldOutlineSvg {...props} />;
});
