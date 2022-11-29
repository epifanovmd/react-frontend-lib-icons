import React, { FC, memo } from 'react';
import SyllabaryKatakanaSvg from '../svg/syllabary-katakana.svg';

export interface ISyllabaryKatakanaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyllabaryKatakanaIcon: FC<ISyllabaryKatakanaIconProps> = memo(props => {
  return <SyllabaryKatakanaSvg {...props} />;
});
