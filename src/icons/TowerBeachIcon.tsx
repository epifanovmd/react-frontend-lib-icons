import React, { FC, memo } from 'react';
import TowerBeachSvg from '../svg/tower-beach.svg';

export interface ITowerBeachIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TowerBeachIcon: FC<ITowerBeachIconProps> = memo(props => {
  return <TowerBeachSvg {...props} />;
});
