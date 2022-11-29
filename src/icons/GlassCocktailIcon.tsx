import React, { FC, memo } from 'react';
import GlassCocktailSvg from '../svg/glass-cocktail.svg';

export interface IGlassCocktailIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassCocktailIcon: FC<IGlassCocktailIconProps> = memo(props => {
  return <GlassCocktailSvg {...props} />;
});
