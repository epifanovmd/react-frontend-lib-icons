import React, { FC, memo } from 'react';
import WalkSvg from '../svg/walk.svg';

export interface IWalkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WalkIcon: FC<IWalkIconProps> = memo(props => {
  return <WalkSvg {...props} />;
});
