import React, { FC, memo } from 'react';
import ArrowLeftThinCircleOutlineSvg from '../svg/arrow-left-thin-circle-outline.svg';

export interface IArrowLeftThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftThinCircleOutlineIcon: FC<IArrowLeftThinCircleOutlineIconProps> = memo(props => {
  return <ArrowLeftThinCircleOutlineSvg {...props} />;
});
