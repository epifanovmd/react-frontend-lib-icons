import React, { FC, memo } from 'react';
import ArrowCollapseAllSvg from '../svg/arrow-collapse-all.svg';

export interface IArrowCollapseAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowCollapseAllIcon: FC<IArrowCollapseAllIconProps> = memo(props => {
  return <ArrowCollapseAllSvg {...props} />;
});
