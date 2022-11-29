import React, { FC, memo } from 'react';
import ArrowTopRightBottomLeftBoldSvg from '../svg/arrow-top-right-bottom-left-bold.svg';

export interface IArrowTopRightBottomLeftBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightBottomLeftBoldIcon: FC<IArrowTopRightBottomLeftBoldIconProps> = memo(props => {
  return <ArrowTopRightBottomLeftBoldSvg {...props} />;
});
