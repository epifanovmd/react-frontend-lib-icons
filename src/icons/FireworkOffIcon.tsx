import React, { FC, memo } from 'react';
import FireworkOffSvg from '../svg/firework-off.svg';

export interface IFireworkOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireworkOffIcon: FC<IFireworkOffIconProps> = memo(props => {
  return <FireworkOffSvg {...props} />;
});
