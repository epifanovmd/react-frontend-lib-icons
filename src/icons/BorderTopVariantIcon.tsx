import React, { FC, memo } from 'react';
import BorderTopVariantSvg from '../svg/border-top-variant.svg';

export interface IBorderTopVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderTopVariantIcon: FC<IBorderTopVariantIconProps> = memo(props => {
  return <BorderTopVariantSvg {...props} />;
});
