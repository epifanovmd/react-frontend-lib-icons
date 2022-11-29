import React, { FC, memo } from 'react';
import ArrowBottomLeftThickSvg from '../svg/arrow-bottom-left-thick.svg';

export interface IArrowBottomLeftThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftThickIcon: FC<IArrowBottomLeftThickIconProps> = memo(props => {
  return <ArrowBottomLeftThickSvg {...props} />;
});
