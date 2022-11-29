import React, { FC, memo } from 'react';
import ArrowDownRightSvg from '../svg/arrow-down-right.svg';

export interface IArrowDownRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownRightIcon: FC<IArrowDownRightIconProps> = memo(props => {
  return <ArrowDownRightSvg {...props} />;
});
