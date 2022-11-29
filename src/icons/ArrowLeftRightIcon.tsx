import React, { FC, memo } from 'react';
import ArrowLeftRightSvg from '../svg/arrow-left-right.svg';

export interface IArrowLeftRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftRightIcon: FC<IArrowLeftRightIconProps> = memo(props => {
  return <ArrowLeftRightSvg {...props} />;
});
