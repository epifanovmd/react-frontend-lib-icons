import React, { FC, memo } from 'react';
import PigVariantOutlineSvg from '../svg/pig-variant-outline.svg';

export interface IPigVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PigVariantOutlineIcon: FC<IPigVariantOutlineIconProps> = memo(props => {
  return <PigVariantOutlineSvg {...props} />;
});
