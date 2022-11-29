import React, { FC, memo } from 'react';
import ArrowRightBottomBoldSvg from '../svg/arrow-right-bottom-bold.svg';

export interface IArrowRightBottomBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightBottomBoldIcon: FC<IArrowRightBottomBoldIconProps> = memo(props => {
  return <ArrowRightBottomBoldSvg {...props} />;
});
