import React, { FC, memo } from 'react';
import AlphabeticalVariantOffSvg from '../svg/alphabetical-variant-off.svg';

export interface IAlphabeticalVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphabeticalVariantOffIcon: FC<IAlphabeticalVariantOffIconProps> = memo(props => {
  return <AlphabeticalVariantOffSvg {...props} />;
});
