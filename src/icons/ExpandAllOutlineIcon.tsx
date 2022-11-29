import React, { FC, memo } from 'react';
import ExpandAllOutlineSvg from '../svg/expand-all-outline.svg';

export interface IExpandAllOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExpandAllOutlineIcon: FC<IExpandAllOutlineIconProps> = memo(props => {
  return <ExpandAllOutlineSvg {...props} />;
});
