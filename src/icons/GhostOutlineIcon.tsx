import React, { FC, memo } from 'react';
import GhostOutlineSvg from '../svg/ghost-outline.svg';

export interface IGhostOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GhostOutlineIcon: FC<IGhostOutlineIconProps> = memo(props => {
  return <GhostOutlineSvg {...props} />;
});
