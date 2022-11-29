import React, { FC, memo } from 'react';
import ArrowTopLeftSvg from '../svg/arrow-top-left.svg';

export interface IArrowTopLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowTopLeftIcon: FC<IArrowTopLeftIconProps> = memo(props => {
  return <ArrowTopLeftSvg {...props} />;
});
