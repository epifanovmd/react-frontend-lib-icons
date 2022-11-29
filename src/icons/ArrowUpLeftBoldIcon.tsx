import React, { FC, memo } from 'react';
import ArrowUpLeftBoldSvg from '../svg/arrow-up-left-bold.svg';

export interface IArrowUpLeftBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpLeftBoldIcon: FC<IArrowUpLeftBoldIconProps> = memo(props => {
  return <ArrowUpLeftBoldSvg {...props} />;
});
