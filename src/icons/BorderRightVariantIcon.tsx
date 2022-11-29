import React, { FC, memo } from 'react';
import BorderRightVariantSvg from '../svg/border-right-variant.svg';

export interface IBorderRightVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderRightVariantIcon: FC<IBorderRightVariantIconProps> = memo(props => {
  return <BorderRightVariantSvg {...props} />;
});
