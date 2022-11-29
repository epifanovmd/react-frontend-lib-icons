import React, { FC, memo } from 'react';
import ArrowUpThinCircleOutlineSvg from '../svg/arrow-up-thin-circle-outline.svg';

export interface IArrowUpThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpThinCircleOutlineIcon: FC<IArrowUpThinCircleOutlineIconProps> = memo(props => {
  return <ArrowUpThinCircleOutlineSvg {...props} />;
});
