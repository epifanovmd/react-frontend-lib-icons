import React, { FC, memo } from 'react';
import OrnamentVariantSvg from '../svg/ornament-variant.svg';

export interface IOrnamentVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OrnamentVariantIcon: FC<IOrnamentVariantIconProps> = memo(props => {
  return <OrnamentVariantSvg {...props} />;
});
