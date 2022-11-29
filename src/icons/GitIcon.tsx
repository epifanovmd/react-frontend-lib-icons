import React, { FC, memo } from 'react';
import GitSvg from '../svg/git.svg';

export interface IGitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GitIcon: FC<IGitIconProps> = memo(props => {
  return <GitSvg {...props} />;
});
