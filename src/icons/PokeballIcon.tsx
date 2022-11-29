import React, { FC, memo } from 'react';
import PokeballSvg from '../svg/pokeball.svg';

export interface IPokeballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PokeballIcon: FC<IPokeballIconProps> = memo(props => {
  return <PokeballSvg {...props} />;
});
