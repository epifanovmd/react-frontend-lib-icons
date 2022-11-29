import React, { FC, memo } from 'react';
import ArrowBottomLeftThinSvg from '../svg/arrow-bottom-left-thin.svg';

export interface IArrowBottomLeftThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftThinIcon: FC<IArrowBottomLeftThinIconProps> = memo(props => {
  return <ArrowBottomLeftThinSvg {...props} />;
});
