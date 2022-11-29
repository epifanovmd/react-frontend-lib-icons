import React, { FC, memo } from 'react';
import GlassMugVariantOffSvg from '../svg/glass-mug-variant-off.svg';

export interface IGlassMugVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GlassMugVariantOffIcon: FC<IGlassMugVariantOffIconProps> = memo(props => {
  return <GlassMugVariantOffSvg {...props} />;
});
