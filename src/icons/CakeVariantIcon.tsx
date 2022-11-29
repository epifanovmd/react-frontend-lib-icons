import React, { FC, memo } from 'react';
import CakeVariantSvg from '../svg/cake-variant.svg';

export interface ICakeVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CakeVariantIcon: FC<ICakeVariantIconProps> = memo(props => {
  return <CakeVariantSvg {...props} />;
});
