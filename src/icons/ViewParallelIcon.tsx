import React, { FC, memo } from 'react';
import ViewParallelSvg from '../svg/view-parallel.svg';

export interface IViewParallelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewParallelIcon: FC<IViewParallelIconProps> = memo(props => {
  return <ViewParallelSvg {...props} />;
});
