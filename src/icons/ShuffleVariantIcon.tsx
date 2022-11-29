import React, { FC, memo } from 'react';
import ShuffleVariantSvg from '../svg/shuffle-variant.svg';

export interface IShuffleVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShuffleVariantIcon: FC<IShuffleVariantIconProps> = memo(props => {
  return <ShuffleVariantSvg {...props} />;
});
