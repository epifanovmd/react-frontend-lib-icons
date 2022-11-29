import React, { FC, memo } from 'react';
import ProjectorScreenVariantSvg from '../svg/projector-screen-variant.svg';

export interface IProjectorScreenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenVariantIcon: FC<IProjectorScreenVariantIconProps> = memo(props => {
  return <ProjectorScreenVariantSvg {...props} />;
});
