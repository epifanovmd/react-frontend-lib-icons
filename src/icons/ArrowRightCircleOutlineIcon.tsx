import React, { FC, memo } from 'react';
import ArrowRightCircleOutlineSvg from '../svg/arrow-right-circle-outline.svg';

export interface IArrowRightCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightCircleOutlineIcon: FC<IArrowRightCircleOutlineIconProps> = memo(props => {
  return <ArrowRightCircleOutlineSvg {...props} />;
});
