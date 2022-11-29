import React, { FC, memo } from 'react';
import ProjectorScreenOffOutlineSvg from '../svg/projector-screen-off-outline.svg';

export interface IProjectorScreenOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenOffOutlineIcon: FC<IProjectorScreenOffOutlineIconProps> = memo(props => {
  return <ProjectorScreenOffOutlineSvg {...props} />;
});
