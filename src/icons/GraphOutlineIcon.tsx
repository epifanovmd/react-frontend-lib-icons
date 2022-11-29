import React, { FC, memo } from 'react';
import GraphOutlineSvg from '../svg/graph-outline.svg';

export interface IGraphOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GraphOutlineIcon: FC<IGraphOutlineIconProps> = memo(props => {
  return <GraphOutlineSvg {...props} />;
});
