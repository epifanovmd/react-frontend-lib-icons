import React, { FC, memo } from 'react';
import FormatAnnotationMinusSvg from '../svg/format-annotation-minus.svg';

export interface IFormatAnnotationMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAnnotationMinusIcon: FC<IFormatAnnotationMinusIconProps> = memo(props => {
  return <FormatAnnotationMinusSvg {...props} />;
});
