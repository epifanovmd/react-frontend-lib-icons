import React, { FC, memo } from 'react';
import GrassSvg from '../svg/grass.svg';

export interface IGrassIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GrassIcon: FC<IGrassIconProps> = memo(props => {
  return <GrassSvg {...props} />;
});
