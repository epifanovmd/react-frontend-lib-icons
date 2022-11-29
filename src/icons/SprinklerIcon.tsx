import React, { FC, memo } from 'react';
import SprinklerSvg from '../svg/sprinkler.svg';

export interface ISprinklerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SprinklerIcon: FC<ISprinklerIconProps> = memo(props => {
  return <SprinklerSvg {...props} />;
});
