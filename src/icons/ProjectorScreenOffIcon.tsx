import React, { FC, memo } from 'react';
import ProjectorScreenOffSvg from '../svg/projector-screen-off.svg';

export interface IProjectorScreenOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenOffIcon: FC<IProjectorScreenOffIconProps> = memo(props => {
  return <ProjectorScreenOffSvg {...props} />;
});
