import React, { FC, memo } from 'react';
import CollapseAllOutlineSvg from '../svg/collapse-all-outline.svg';

export interface ICollapseAllOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CollapseAllOutlineIcon: FC<ICollapseAllOutlineIconProps> = memo(props => {
  return <CollapseAllOutlineSvg {...props} />;
});
