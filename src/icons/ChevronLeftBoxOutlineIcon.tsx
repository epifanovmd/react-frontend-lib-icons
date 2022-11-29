import React, { FC, memo } from 'react';
import ChevronLeftBoxOutlineSvg from '../svg/chevron-left-box-outline.svg';

export interface IChevronLeftBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronLeftBoxOutlineIcon: FC<IChevronLeftBoxOutlineIconProps> = memo(props => {
  return <ChevronLeftBoxOutlineSvg {...props} />;
});
