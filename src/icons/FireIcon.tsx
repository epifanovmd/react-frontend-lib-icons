import React, { FC, memo } from 'react';
import FireSvg from '../svg/fire.svg';

export interface IFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FireIcon: FC<IFireIconProps> = memo(props => {
  return <FireSvg {...props} />;
});
