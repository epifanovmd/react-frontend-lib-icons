import React, { FC, memo } from 'react';
import GitlabSvg from '../svg/gitlab.svg';

export interface IGitlabIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GitlabIcon: FC<IGitlabIconProps> = memo(props => {
  return <GitlabSvg {...props} />;
});
