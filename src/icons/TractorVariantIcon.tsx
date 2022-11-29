import React, { FC, memo } from 'react';
import TractorVariantSvg from '../svg/tractor-variant.svg';

export interface ITractorVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TractorVariantIcon: FC<ITractorVariantIconProps> = memo(props => {
  return <TractorVariantSvg {...props} />;
});
