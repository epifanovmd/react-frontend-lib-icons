import React, { FC, memo } from 'react';
import ArrowULeftBottomBoldSvg from '../svg/arrow-u-left-bottom-bold.svg';

export interface IArrowULeftBottomBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowULeftBottomBoldIcon: FC<IArrowULeftBottomBoldIconProps> = memo(props => {
  return <ArrowULeftBottomBoldSvg {...props} />;
});
