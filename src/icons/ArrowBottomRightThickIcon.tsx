import React, { FC, memo } from 'react';
import ArrowBottomRightThickSvg from '../svg/arrow-bottom-right-thick.svg';

export interface IArrowBottomRightThickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightThickIcon: FC<IArrowBottomRightThickIconProps> = memo(props => {
  return <ArrowBottomRightThickSvg {...props} />;
});
