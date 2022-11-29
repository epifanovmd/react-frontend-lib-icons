import React, { FC, memo } from 'react';
import ArrowRightTopSvg from '../svg/arrow-right-top.svg';

export interface IArrowRightTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightTopIcon: FC<IArrowRightTopIconProps> = memo(props => {
  return <ArrowRightTopSvg {...props} />;
});
