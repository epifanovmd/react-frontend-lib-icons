import React, { FC, memo } from 'react';
import WallSconceFlatSvg from '../svg/wall-sconce-flat.svg';

export interface IWallSconceFlatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceFlatIcon: FC<IWallSconceFlatIconProps> = memo(props => {
  return <WallSconceFlatSvg {...props} />;
});
