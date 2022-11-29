import React, { FC, memo } from 'react';
import GithubSvg from '../svg/github.svg';

export interface IGithubIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GithubIcon: FC<IGithubIconProps> = memo(props => {
  return <GithubSvg {...props} />;
});
