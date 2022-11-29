import React, { FC, memo } from 'react';
import RazorSingleEdgeSvg from '../svg/razor-single-edge.svg';

export interface IRazorSingleEdgeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RazorSingleEdgeIcon: FC<IRazorSingleEdgeIconProps> = memo(props => {
  return <RazorSingleEdgeSvg {...props} />;
});
