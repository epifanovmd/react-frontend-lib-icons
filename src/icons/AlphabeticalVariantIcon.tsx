import React, { FC, memo } from 'react';
import AlphabeticalVariantSvg from '../svg/alphabetical-variant.svg';

export interface IAlphabeticalVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabeticalVariantIcon: FC<IAlphabeticalVariantIconProps> = memo(props => {
  return <AlphabeticalVariantSvg {...props} />;
});
