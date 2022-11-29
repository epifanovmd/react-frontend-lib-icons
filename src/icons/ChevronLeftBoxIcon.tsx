import React, { FC, memo } from 'react';
import ChevronLeftBoxSvg from '../svg/chevron-left-box.svg';

export interface IChevronLeftBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronLeftBoxIcon: FC<IChevronLeftBoxIconProps> = memo(props => {
  return <ChevronLeftBoxSvg {...props} />;
});
