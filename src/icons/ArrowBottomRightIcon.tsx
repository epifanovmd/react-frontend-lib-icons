import React, { FC, memo } from 'react';
import ArrowBottomRightSvg from '../svg/arrow-bottom-right.svg';

export interface IArrowBottomRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowBottomRightIcon: FC<IArrowBottomRightIconProps> = memo(props => {
  return <ArrowBottomRightSvg {...props} />;
});
