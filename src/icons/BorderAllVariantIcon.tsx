import React, { FC, memo } from 'react';
import BorderAllVariantSvg from '../svg/border-all-variant.svg';

export interface IBorderAllVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderAllVariantIcon: FC<IBorderAllVariantIconProps> = memo(props => {
  return <BorderAllVariantSvg {...props} />;
});
