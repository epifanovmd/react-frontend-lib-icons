import React, { FC, memo } from 'react';
import FloppyVariantSvg from '../svg/floppy-variant.svg';

export interface IFloppyVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FloppyVariantIcon: FC<IFloppyVariantIconProps> = memo(props => {
  return <FloppyVariantSvg {...props} />;
});
