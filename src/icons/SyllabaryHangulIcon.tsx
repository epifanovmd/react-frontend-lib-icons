import React, { FC, memo } from 'react';
import SyllabaryHangulSvg from '../svg/syllabary-hangul.svg';

export interface ISyllabaryHangulIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyllabaryHangulIcon: FC<ISyllabaryHangulIconProps> = memo(props => {
  return <SyllabaryHangulSvg {...props} />;
});
