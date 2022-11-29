import React, { FC, memo } from 'react';
import ArrowULeftTopBoldSvg from '../svg/arrow-u-left-top-bold.svg';

export interface IArrowULeftTopBoldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowULeftTopBoldIcon: FC<IArrowULeftTopBoldIconProps> = memo(props => {
  return <ArrowULeftTopBoldSvg {...props} />;
});
