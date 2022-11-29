import React, { FC, memo } from 'react';
import BorderNoneVariantSvg from '../svg/border-none-variant.svg';

export interface IBorderNoneVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderNoneVariantIcon: FC<IBorderNoneVariantIconProps> = memo(props => {
  return <BorderNoneVariantSvg {...props} />;
});
