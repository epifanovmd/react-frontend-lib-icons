import React, { FC, memo } from 'react';
import ArrowTopLeftBottomRightSvg from '../svg/arrow-top-left-bottom-right.svg';

export interface IArrowTopLeftBottomRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftBottomRightIcon: FC<IArrowTopLeftBottomRightIconProps> = memo(props => {
  return <ArrowTopLeftBottomRightSvg {...props} />;
});
