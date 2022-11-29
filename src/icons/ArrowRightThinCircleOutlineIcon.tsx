import React, { FC, memo } from 'react';
import ArrowRightThinCircleOutlineSvg from '../svg/arrow-right-thin-circle-outline.svg';

export interface IArrowRightThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightThinCircleOutlineIcon: FC<IArrowRightThinCircleOutlineIconProps> = memo(props => {
  return <ArrowRightThinCircleOutlineSvg {...props} />;
});
