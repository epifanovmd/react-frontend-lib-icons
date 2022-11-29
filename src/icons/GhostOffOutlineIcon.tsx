import React, { FC, memo } from 'react';
import GhostOffOutlineSvg from '../svg/ghost-off-outline.svg';

export interface IGhostOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GhostOffOutlineIcon: FC<IGhostOffOutlineIconProps> = memo(props => {
  return <GhostOffOutlineSvg {...props} />;
});
