import React, { FC, memo } from 'react';
import ArrowCollapseLeftSvg from '../svg/arrow-collapse-left.svg';

export interface IArrowCollapseLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseLeftIcon: FC<IArrowCollapseLeftIconProps> = memo(props => {
  return <ArrowCollapseLeftSvg {...props} />;
});
