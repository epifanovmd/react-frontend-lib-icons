import React, { FC, memo } from 'react';
import ArrowTopRightBottomLeftSvg from '../svg/arrow-top-right-bottom-left.svg';

export interface IArrowTopRightBottomLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightBottomLeftIcon: FC<IArrowTopRightBottomLeftIconProps> = memo(props => {
  return <ArrowTopRightBottomLeftSvg {...props} />;
});
