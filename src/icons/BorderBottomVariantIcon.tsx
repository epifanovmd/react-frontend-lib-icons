import React, { FC, memo } from 'react';
import BorderBottomVariantSvg from '../svg/border-bottom-variant.svg';

export interface IBorderBottomVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BorderBottomVariantIcon: FC<IBorderBottomVariantIconProps> = memo(props => {
  return <BorderBottomVariantSvg {...props} />;
});
