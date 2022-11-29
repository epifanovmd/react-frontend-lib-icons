import React, { FC, memo } from 'react';
import VanishSvg from '../svg/vanish.svg';

export interface IVanishIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VanishIcon: FC<IVanishIconProps> = memo(props => {
  return <VanishSvg {...props} />;
});
