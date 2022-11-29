import React, { FC, memo } from 'react';
import FireworkSvg from '../svg/firework.svg';

export interface IFireworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireworkIcon: FC<IFireworkIconProps> = memo(props => {
  return <FireworkSvg {...props} />;
});
