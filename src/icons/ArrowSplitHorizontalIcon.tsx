import React, { FC, memo } from 'react';
import ArrowSplitHorizontalSvg from '../svg/arrow-split-horizontal.svg';

export interface IArrowSplitHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowSplitHorizontalIcon: FC<IArrowSplitHorizontalIconProps> = memo(props => {
  return <ArrowSplitHorizontalSvg {...props} />;
});
