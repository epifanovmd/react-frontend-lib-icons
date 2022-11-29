import React, { FC, memo } from 'react';
import LightbulbVariantOutlineSvg from '../svg/lightbulb-variant-outline.svg';

export interface ILightbulbVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbVariantOutlineIcon: FC<ILightbulbVariantOutlineIconProps> = memo(props => {
  return <LightbulbVariantOutlineSvg {...props} />;
});
