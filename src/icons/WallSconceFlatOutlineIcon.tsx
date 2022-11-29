import React, { FC, memo } from 'react';
import WallSconceFlatOutlineSvg from '../svg/wall-sconce-flat-outline.svg';

export interface IWallSconceFlatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceFlatOutlineIcon: FC<IWallSconceFlatOutlineIconProps> = memo(props => {
  return <WallSconceFlatOutlineSvg {...props} />;
});
