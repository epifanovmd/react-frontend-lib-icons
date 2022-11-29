import React, { FC, memo } from 'react';
import ViewSplitVerticalSvg from '../svg/view-split-vertical.svg';

export interface IViewSplitVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewSplitVerticalIcon: FC<IViewSplitVerticalIconProps> = memo(props => {
  return <ViewSplitVerticalSvg {...props} />;
});
