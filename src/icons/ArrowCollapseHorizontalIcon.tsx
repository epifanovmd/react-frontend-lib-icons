import React, { FC, memo } from 'react';
import ArrowCollapseHorizontalSvg from '../svg/arrow-collapse-horizontal.svg';

export interface IArrowCollapseHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseHorizontalIcon: FC<IArrowCollapseHorizontalIconProps> = memo(props => {
  return <ArrowCollapseHorizontalSvg {...props} />;
});
