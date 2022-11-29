import React, { FC, memo } from 'react';
import ArrowLeftBoldSvg from '../svg/arrow-left-bold.svg';

export interface IArrowLeftBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftBoldIcon: FC<IArrowLeftBoldIconProps> = memo(props => {
  return <ArrowLeftBoldSvg {...props} />;
});
