import React, { FC, memo } from 'react';
import ViewParallelOutlineSvg from '../svg/view-parallel-outline.svg';

export interface IViewParallelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewParallelOutlineIcon: FC<IViewParallelOutlineIconProps> = memo(props => {
  return <ViewParallelOutlineSvg {...props} />;
});
