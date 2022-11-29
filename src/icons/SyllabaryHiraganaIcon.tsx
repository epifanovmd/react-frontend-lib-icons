import React, { FC, memo } from 'react';
import SyllabaryHiraganaSvg from '../svg/syllabary-hiragana.svg';

export interface ISyllabaryHiraganaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyllabaryHiraganaIcon: FC<ISyllabaryHiraganaIconProps> = memo(props => {
  return <SyllabaryHiraganaSvg {...props} />;
});
