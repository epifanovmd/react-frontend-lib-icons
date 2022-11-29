import React, { FC, memo } from 'react';
import UnicornVariantSvg from '../svg/unicorn-variant.svg';

export interface IUnicornVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const UnicornVariantIcon: FC<IUnicornVariantIconProps> = memo(props => {
  return <UnicornVariantSvg {...props} />;
});
