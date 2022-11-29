import React, { FC, memo } from 'react';
import ArrowDownLeftBoldSvg from '../svg/arrow-down-left-bold.svg';

export interface IArrowDownLeftBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownLeftBoldIcon: FC<IArrowDownLeftBoldIconProps> = memo(props => {
  return <ArrowDownLeftBoldSvg {...props} />;
});
