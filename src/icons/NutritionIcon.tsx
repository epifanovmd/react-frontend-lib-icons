import React, { FC, memo } from 'react';
import NutritionSvg from '../svg/nutrition.svg';

export interface INutritionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NutritionIcon: FC<INutritionIconProps> = memo(props => {
  return <NutritionSvg {...props} />;
});
