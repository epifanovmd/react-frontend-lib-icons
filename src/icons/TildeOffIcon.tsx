import React, { FC, memo } from 'react';
import TildeOffSvg from '../svg/tilde-off.svg';

export interface ITildeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TildeOffIcon: FC<ITildeOffIconProps> = memo(props => {
  return <TildeOffSvg {...props} />;
});
