import React, { FC, memo } from 'react';
import CakeVariantOutlineSvg from '../svg/cake-variant-outline.svg';

export interface ICakeVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CakeVariantOutlineIcon: FC<ICakeVariantOutlineIconProps> = memo(props => {
  return <CakeVariantOutlineSvg {...props} />;
});
