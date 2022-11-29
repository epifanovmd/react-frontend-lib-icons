import React, { FC, memo } from 'react';
import TowerFireSvg from '../svg/tower-fire.svg';

export interface ITowerFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TowerFireIcon: FC<ITowerFireIconProps> = memo(props => {
  return <TowerFireSvg {...props} />;
});
