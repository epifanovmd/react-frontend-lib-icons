import React, { FC, memo } from 'react';
import LabelVariantSvg from '../svg/label-variant.svg';

export interface ILabelVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelVariantIcon: FC<ILabelVariantIconProps> = memo(props => {
  return <LabelVariantSvg {...props} />;
});
