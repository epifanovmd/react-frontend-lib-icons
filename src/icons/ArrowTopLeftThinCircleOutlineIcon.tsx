import React, { FC, memo } from 'react';
import ArrowTopLeftThinCircleOutlineSvg from '../svg/arrow-top-left-thin-circle-outline.svg';

export interface IArrowTopLeftThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftThinCircleOutlineIcon: FC<IArrowTopLeftThinCircleOutlineIconProps> = memo(props => {
  return <ArrowTopLeftThinCircleOutlineSvg {...props} />;
});
