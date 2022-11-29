import React, { FC, memo } from 'react';
import SprinklerFireSvg from '../svg/sprinkler-fire.svg';

export interface ISprinklerFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SprinklerFireIcon: FC<ISprinklerFireIconProps> = memo(props => {
  return <SprinklerFireSvg {...props} />;
});
