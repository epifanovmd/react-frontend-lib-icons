import React, { FC, memo } from 'react';
import ArrowUpLeftSvg from '../svg/arrow-up-left.svg';

export interface IArrowUpLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpLeftIcon: FC<IArrowUpLeftIconProps> = memo(props => {
  return <ArrowUpLeftSvg {...props} />;
});
