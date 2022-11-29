import React, { FC, memo } from 'react';
import ArrowCollapseSvg from '../svg/arrow-collapse.svg';

export interface IArrowCollapseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseIcon: FC<IArrowCollapseIconProps> = memo(props => {
  return <ArrowCollapseSvg {...props} />;
});
