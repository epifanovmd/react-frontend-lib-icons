import React, { FC, memo } from 'react';
import ArrowUpBoxSvg from '../svg/arrow-up-box.svg';

export interface IArrowUpBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpBoxIcon: FC<IArrowUpBoxIconProps> = memo(props => {
  return <ArrowUpBoxSvg {...props} />;
});
