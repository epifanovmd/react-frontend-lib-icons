import React, { FC, memo } from 'react';
import ArrowSplitVerticalSvg from '../svg/arrow-split-vertical.svg';

export interface IArrowSplitVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowSplitVerticalIcon: FC<IArrowSplitVerticalIconProps> = memo(props => {
  return <ArrowSplitVerticalSvg {...props} />;
});
