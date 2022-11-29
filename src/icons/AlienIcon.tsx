import React, { FC, memo } from 'react';
import AlienSvg from '../svg/alien.svg';

export interface IAlienIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlienIcon: FC<IAlienIconProps> = memo(props => {
  return <AlienSvg {...props} />;
});
