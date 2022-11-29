import React, { FC, memo } from 'react';
import BlenderSoftwareSvg from '../svg/blender-software.svg';

export interface IBlenderSoftwareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlenderSoftwareIcon: FC<IBlenderSoftwareIconProps> = memo(props => {
  return <BlenderSoftwareSvg {...props} />;
});
