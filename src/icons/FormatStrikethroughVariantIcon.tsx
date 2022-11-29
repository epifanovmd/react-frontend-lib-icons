import React, { FC, memo } from 'react';
import FormatStrikethroughVariantSvg from '../svg/format-strikethrough-variant.svg';

export interface IFormatStrikethroughVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatStrikethroughVariantIcon: FC<IFormatStrikethroughVariantIconProps> = memo(props => {
  return <FormatStrikethroughVariantSvg {...props} />;
});
