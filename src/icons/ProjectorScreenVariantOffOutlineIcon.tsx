import React, { FC, memo } from 'react';
import ProjectorScreenVariantOffOutlineSvg from '../svg/projector-screen-variant-off-outline.svg';

export interface IProjectorScreenVariantOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenVariantOffOutlineIcon: FC<IProjectorScreenVariantOffOutlineIconProps> = memo(props => {
  return <ProjectorScreenVariantOffOutlineSvg {...props} />;
});
