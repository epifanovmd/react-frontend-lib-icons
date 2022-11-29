import React, { FC, memo } from 'react';
import ArrowCollapseRightSvg from '../svg/arrow-collapse-right.svg';

export interface IArrowCollapseRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseRightIcon: FC<IArrowCollapseRightIconProps> = memo(props => {
  return <ArrowCollapseRightSvg {...props} />;
});
