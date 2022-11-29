import React, { FC, memo } from 'react';
import PokemonGoSvg from '../svg/pokemon-go.svg';

export interface IPokemonGoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PokemonGoIcon: FC<IPokemonGoIconProps> = memo(props => {
  return <PokemonGoSvg {...props} />;
});
