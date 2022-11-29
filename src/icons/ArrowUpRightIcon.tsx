import React, { FC, memo } from 'react';
import ArrowUpRightSvg from '../svg/arrow-up-right.svg';

export interface IArrowUpRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpRightIcon: FC<IArrowUpRightIconProps> = memo(props => {
  return <ArrowUpRightSvg {...props} />;
});
