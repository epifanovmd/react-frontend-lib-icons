import React, { FC, memo } from 'react';
import ArrowBottomRightThinSvg from '../svg/arrow-bottom-right-thin.svg';

export interface IArrowBottomRightThinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightThinIcon: FC<IArrowBottomRightThinIconProps> = memo(props => {
  return <ArrowBottomRightThinSvg {...props} />;
});
