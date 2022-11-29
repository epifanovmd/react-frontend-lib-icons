import React, { FC, memo } from 'react';
import BlenderOutlineSvg from '../svg/blender-outline.svg';

export interface IBlenderOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlenderOutlineIcon: FC<IBlenderOutlineIconProps> = memo(props => {
  return <BlenderOutlineSvg {...props} />;
});
