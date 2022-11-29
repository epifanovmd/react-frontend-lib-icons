import React, { FC, memo } from 'react';
import ViewSplitHorizontalSvg from '../svg/view-split-horizontal.svg';

export interface IViewSplitHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewSplitHorizontalIcon: FC<IViewSplitHorizontalIconProps> = memo(props => {
  return <ViewSplitHorizontalSvg {...props} />;
});
