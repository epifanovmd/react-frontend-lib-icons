import React, { FC, memo } from 'react';
import ArrowULeftTopSvg from '../svg/arrow-u-left-top.svg';

export interface IArrowULeftTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowULeftTopIcon: FC<IArrowULeftTopIconProps> = memo(props => {
  return <ArrowULeftTopSvg {...props} />;
});
