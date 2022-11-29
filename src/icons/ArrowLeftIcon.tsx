import React, { FC, memo } from 'react';
import ArrowLeftSvg from '../svg/arrow-left.svg';

export interface IArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftIcon: FC<IArrowLeftIconProps> = memo(props => {
  return <ArrowLeftSvg {...props} />;
});
