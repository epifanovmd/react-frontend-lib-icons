import React, { FC, memo } from 'react';
import ArrowTopRightThinCircleOutlineSvg from '../svg/arrow-top-right-thin-circle-outline.svg';

export interface IArrowTopRightThinCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightThinCircleOutlineIcon: FC<IArrowTopRightThinCircleOutlineIconProps> = memo(props => {
  return <ArrowTopRightThinCircleOutlineSvg {...props} />;
});
