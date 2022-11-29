import React, { FC, memo } from 'react';
import ProjectorScreenVariantOffSvg from '../svg/projector-screen-variant-off.svg';

export interface IProjectorScreenVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProjectorScreenVariantOffIcon: FC<IProjectorScreenVariantOffIconProps> = memo(props => {
  return <ProjectorScreenVariantOffSvg {...props} />;
});
