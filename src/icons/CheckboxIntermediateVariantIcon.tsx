import React, { FC, memo } from 'react';
import CheckboxIntermediateVariantSvg from '../svg/checkbox-intermediate-variant.svg';

export interface ICheckboxIntermediateVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckboxIntermediateVariantIcon: FC<ICheckboxIntermediateVariantIconProps> = memo(props => {
  return <CheckboxIntermediateVariantSvg {...props} />;
});
