import React, { FC, memo } from 'react';
import ArrowRightSvg from '../svg/arrow-right.svg';

export interface IArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightIcon: FC<IArrowRightIconProps> = memo(props => {
  return <ArrowRightSvg {...props} />;
});
