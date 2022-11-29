import React, { FC, memo } from 'react';
import JumpRopeSvg from '../svg/jump-rope.svg';

export interface IJumpRopeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JumpRopeIcon: FC<IJumpRopeIconProps> = memo(props => {
  return <JumpRopeSvg {...props} />;
});
