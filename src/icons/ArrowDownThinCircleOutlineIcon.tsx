import React, { FC, memo } from 'react';
import ArrowDownThinCircleOutlineSvg from '../svg/arrow-down-thin-circle-outline.svg';

export interface IArrowDownThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownThinCircleOutlineIcon: FC<IArrowDownThinCircleOutlineIconProps> = memo(props => {
  return <ArrowDownThinCircleOutlineSvg {...props} />;
});
