import React, { FC, memo } from 'react';
import ArrowLeftCircleOutlineSvg from '../svg/arrow-left-circle-outline.svg';

export interface IArrowLeftCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftCircleOutlineIcon: FC<IArrowLeftCircleOutlineIconProps> = memo(props => {
  return <ArrowLeftCircleOutlineSvg {...props} />;
});
