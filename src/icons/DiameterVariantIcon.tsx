import React, { FC, memo } from 'react';
import DiameterVariantSvg from '../svg/diameter-variant.svg';

export interface IDiameterVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DiameterVariantIcon: FC<IDiameterVariantIconProps> = memo(props => {
  return <DiameterVariantSvg {...props} />;
});
