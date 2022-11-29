import React, { FC, memo } from 'react';
import ArrowTopLeftBottomRightBoldSvg from '../svg/arrow-top-left-bottom-right-bold.svg';

export interface IArrowTopLeftBottomRightBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftBottomRightBoldIcon: FC<IArrowTopLeftBottomRightBoldIconProps> = memo(props => {
  return <ArrowTopLeftBottomRightBoldSvg {...props} />;
});
