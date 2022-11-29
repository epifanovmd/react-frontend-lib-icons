import React, { FC, memo } from 'react';
import FormatTextVariantSvg from '../svg/format-text-variant.svg';

export interface IFormatTextVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextVariantIcon: FC<IFormatTextVariantIconProps> = memo(props => {
  return <FormatTextVariantSvg {...props} />;
});
