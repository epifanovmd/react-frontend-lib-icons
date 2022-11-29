import React, { FC, memo } from 'react';
import ArrowBottomLeftSvg from '../svg/arrow-bottom-left.svg';

export interface IArrowBottomLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomLeftIcon: FC<IArrowBottomLeftIconProps> = memo(props => {
  return <ArrowBottomLeftSvg {...props} />;
});
