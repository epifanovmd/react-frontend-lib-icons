import React, { FC, memo } from 'react';
import GlassCocktailOffSvg from '../svg/glass-cocktail-off.svg';

export interface IGlassCocktailOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassCocktailOffIcon: FC<IGlassCocktailOffIconProps> = memo(props => {
  return <GlassCocktailOffSvg {...props} />;
});
