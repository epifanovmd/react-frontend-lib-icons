import React, { FC, memo } from 'react';
import ArrowUDownLeftSvg from '../svg/arrow-u-down-left.svg';

export interface IArrowUDownLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUDownLeftIcon: FC<IArrowUDownLeftIconProps> = memo(props => {
  return <ArrowUDownLeftSvg {...props} />;
});
