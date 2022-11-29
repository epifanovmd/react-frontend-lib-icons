import React, { FC, memo } from 'react';
import GlassMugVariantSvg from '../svg/glass-mug-variant.svg';

export interface IGlassMugVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassMugVariantIcon: FC<IGlassMugVariantIconProps> = memo(props => {
  return <GlassMugVariantSvg {...props} />;
});
