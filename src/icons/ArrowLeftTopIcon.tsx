import React, { FC, memo } from 'react';
import ArrowLeftTopSvg from '../svg/arrow-left-top.svg';

export interface IArrowLeftTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftTopIcon: FC<IArrowLeftTopIconProps> = memo(props => {
  return <ArrowLeftTopSvg {...props} />;
});
