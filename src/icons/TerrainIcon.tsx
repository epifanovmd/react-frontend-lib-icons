import React, { FC, memo } from 'react';
import TerrainSvg from '../svg/terrain.svg';

export interface ITerrainIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TerrainIcon: FC<ITerrainIconProps> = memo(props => {
  return <TerrainSvg {...props} />;
});
