import React, { FC, memo } from 'react';
import FormatAnnotationPlusSvg from '../svg/format-annotation-plus.svg';

export interface IFormatAnnotationPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAnnotationPlusIcon: FC<IFormatAnnotationPlusIconProps> = memo(props => {
  return <FormatAnnotationPlusSvg {...props} />;
});
