import React, { FC, memo } from 'react';
import NukeSvg from '../svg/nuke.svg';

export interface INukeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NukeIcon: FC<INukeIconProps> = memo(props => {
  return <NukeSvg {...props} />;
});
