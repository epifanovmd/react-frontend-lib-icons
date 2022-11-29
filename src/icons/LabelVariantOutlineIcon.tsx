import React, { FC, memo } from 'react';
import LabelVariantOutlineSvg from '../svg/label-variant-outline.svg';

export interface ILabelVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LabelVariantOutlineIcon: FC<ILabelVariantOutlineIconProps> = memo(props => {
  return <LabelVariantOutlineSvg {...props} />;
});
