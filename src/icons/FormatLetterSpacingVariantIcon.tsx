import React, { FC, memo } from 'react';
import FormatLetterSpacingVariantSvg from '../svg/format-letter-spacing-variant.svg';

export interface IFormatLetterSpacingVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterSpacingVariantIcon: FC<IFormatLetterSpacingVariantIconProps> = memo(props => {
  return <FormatLetterSpacingVariantSvg {...props} />;
});
