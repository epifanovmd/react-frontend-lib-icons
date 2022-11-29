import React, { FC, memo } from 'react';
import ArrowUpBoldCircleOutlineSvg from '../svg/arrow-up-bold-circle-outline.svg';

export interface IArrowUpBoldCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoldCircleOutlineIcon: FC<IArrowUpBoldCircleOutlineIconProps> = memo(props => {
  return <ArrowUpBoldCircleOutlineSvg {...props} />;
});
