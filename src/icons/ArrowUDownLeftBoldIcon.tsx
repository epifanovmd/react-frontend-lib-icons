import React, { FC, memo } from 'react';
import ArrowUDownLeftBoldSvg from '../svg/arrow-u-down-left-bold.svg';

export interface IArrowUDownLeftBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUDownLeftBoldIcon: FC<IArrowUDownLeftBoldIconProps> = memo(props => {
  return <ArrowUDownLeftBoldSvg {...props} />;
});
