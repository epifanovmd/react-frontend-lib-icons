import React, { FC, memo } from 'react';
import PigVariantSvg from '../svg/pig-variant.svg';

export interface IPigVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PigVariantIcon: FC<IPigVariantIconProps> = memo(props => {
  return <PigVariantSvg {...props} />;
});
