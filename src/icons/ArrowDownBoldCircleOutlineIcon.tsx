import React, { FC, memo } from 'react';
import ArrowDownBoldCircleOutlineSvg from '../svg/arrow-down-bold-circle-outline.svg';

export interface IArrowDownBoldCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownBoldCircleOutlineIcon: FC<IArrowDownBoldCircleOutlineIconProps> = memo(props => {
  return <ArrowDownBoldCircleOutlineSvg {...props} />;
});
