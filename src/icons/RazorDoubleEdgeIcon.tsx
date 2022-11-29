import React, { FC, memo } from 'react';
import RazorDoubleEdgeSvg from '../svg/razor-double-edge.svg';

export interface IRazorDoubleEdgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RazorDoubleEdgeIcon: FC<IRazorDoubleEdgeIconProps> = memo(props => {
  return <RazorDoubleEdgeSvg {...props} />;
});
