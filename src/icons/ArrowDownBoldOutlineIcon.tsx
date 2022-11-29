import React, { FC, memo } from 'react';
import ArrowDownBoldOutlineSvg from '../svg/arrow-down-bold-outline.svg';

export interface IArrowDownBoldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldOutlineIcon: FC<IArrowDownBoldOutlineIconProps> = memo(props => {
  return <ArrowDownBoldOutlineSvg {...props} />;
});
