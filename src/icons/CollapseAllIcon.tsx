import React, { FC, memo } from 'react';
import CollapseAllSvg from '../svg/collapse-all.svg';

export interface ICollapseAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CollapseAllIcon: FC<ICollapseAllIconProps> = memo(props => {
  return <CollapseAllSvg {...props} />;
});
