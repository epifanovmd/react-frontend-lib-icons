import React, { FC, memo } from 'react';
import ArrowTopRightSvg from '../svg/arrow-top-right.svg';

export interface IArrowTopRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopRightIcon: FC<IArrowTopRightIconProps> = memo(props => {
  return <ArrowTopRightSvg {...props} />;
});
