import React, { FC, memo } from 'react';
import ProjectorSvg from '../svg/projector.svg';

export interface IProjectorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorIcon: FC<IProjectorIconProps> = memo(props => {
  return <ProjectorSvg {...props} />;
});
