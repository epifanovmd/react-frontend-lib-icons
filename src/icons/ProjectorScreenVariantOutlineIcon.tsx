import React, { FC, memo } from 'react';
import ProjectorScreenVariantOutlineSvg from '../svg/projector-screen-variant-outline.svg';

export interface IProjectorScreenVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenVariantOutlineIcon: FC<IProjectorScreenVariantOutlineIconProps> = memo(props => {
  return <ProjectorScreenVariantOutlineSvg {...props} />;
});
