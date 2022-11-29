import React, { FC, memo } from 'react';
import ChevronLeftCircleOutlineSvg from '../svg/chevron-left-circle-outline.svg';

export interface IChevronLeftCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronLeftCircleOutlineIcon: FC<IChevronLeftCircleOutlineIconProps> = memo(props => {
  return <ChevronLeftCircleOutlineSvg {...props} />;
});
