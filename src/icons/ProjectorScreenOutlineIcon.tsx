import React, { FC, memo } from 'react';
import ProjectorScreenOutlineSvg from '../svg/projector-screen-outline.svg';

export interface IProjectorScreenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenOutlineIcon: FC<IProjectorScreenOutlineIconProps> = memo(props => {
  return <ProjectorScreenOutlineSvg {...props} />;
});
