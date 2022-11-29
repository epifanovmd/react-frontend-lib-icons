import React, { FC, memo } from 'react';
import ArrowUpSvg from '../svg/arrow-up.svg';

export interface IArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpIcon: FC<IArrowUpIconProps> = memo(props => {
  return <ArrowUpSvg {...props} />;
});
