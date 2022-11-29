import React, { FC, memo } from 'react';
import AtomVariantSvg from '../svg/atom-variant.svg';

export interface IAtomVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AtomVariantIcon: FC<IAtomVariantIconProps> = memo(props => {
  return <AtomVariantSvg {...props} />;
});
