import React, { FC, memo } from 'react';
import BlenderSvg from '../svg/blender.svg';

export interface IBlenderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlenderIcon: FC<IBlenderIconProps> = memo(props => {
  return <BlenderSvg {...props} />;
});
