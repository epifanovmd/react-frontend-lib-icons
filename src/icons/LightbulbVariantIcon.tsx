import React, { FC, memo } from 'react';
import LightbulbVariantSvg from '../svg/lightbulb-variant.svg';

export interface ILightbulbVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbVariantIcon: FC<ILightbulbVariantIconProps> = memo(props => {
  return <LightbulbVariantSvg {...props} />;
});
