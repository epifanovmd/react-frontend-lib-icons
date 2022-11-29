import React, { FC, memo } from 'react';
import FormatTextVariantOutlineSvg from '../svg/format-text-variant-outline.svg';

export interface IFormatTextVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextVariantOutlineIcon: FC<IFormatTextVariantOutlineIconProps> = memo(props => {
  return <FormatTextVariantOutlineSvg {...props} />;
});
