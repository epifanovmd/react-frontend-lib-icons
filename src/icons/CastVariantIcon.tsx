import React, { FC, memo } from 'react';
import CastVariantSvg from '../svg/cast-variant.svg';

export interface ICastVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastVariantIcon: FC<ICastVariantIconProps> = memo(props => {
  return <CastVariantSvg {...props} />;
});
