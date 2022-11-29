import React, { FC, memo } from 'react';
import ArrowUUpLeftBoldSvg from '../svg/arrow-u-up-left-bold.svg';

export interface IArrowUUpLeftBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUUpLeftBoldIcon: FC<IArrowUUpLeftBoldIconProps> = memo(props => {
  return <ArrowUUpLeftBoldSvg {...props} />;
});
