import React, { FC, memo } from 'react';
import DockerSvg from '../svg/docker.svg';

export interface IDockerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DockerIcon: FC<IDockerIconProps> = memo(props => {
  return <DockerSvg {...props} />;
});
