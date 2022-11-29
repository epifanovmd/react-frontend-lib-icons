import React, { FC, memo } from 'react';
import ArrowDownSvg from '../svg/arrow-down.svg';

export interface IArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownIcon: FC<IArrowDownIconProps> = memo(props => {
  return <ArrowDownSvg {...props} />;
});
