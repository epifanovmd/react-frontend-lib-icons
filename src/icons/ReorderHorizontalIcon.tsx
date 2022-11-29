import React, { FC, memo } from 'react';
import ReorderHorizontalSvg from '../svg/reorder-horizontal.svg';

export interface IReorderHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReorderHorizontalIcon: FC<IReorderHorizontalIconProps> = memo(props => {
  return <ReorderHorizontalSvg {...props} />;
});
