import React, { FC, memo } from 'react';
import SyllabaryKatakanaHalfwidthSvg from '../svg/syllabary-katakana-halfwidth.svg';

export interface ISyllabaryKatakanaHalfwidthIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SyllabaryKatakanaHalfwidthIcon: FC<ISyllabaryKatakanaHalfwidthIconProps> = memo(props => {
  return <SyllabaryKatakanaHalfwidthSvg {...props} />;
});
