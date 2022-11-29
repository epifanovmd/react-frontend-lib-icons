import React, { FC, memo } from 'react';
import ProjectorOffSvg from '../svg/projector-off.svg';

export interface IProjectorOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorOffIcon: FC<IProjectorOffIconProps> = memo(props => {
  return <ProjectorOffSvg {...props} />;
});
