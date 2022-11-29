import React, { FC, memo } from 'react';
import LanguageKotlinSvg from '../svg/language-kotlin.svg';

export interface ILanguageKotlinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageKotlinIcon: FC<ILanguageKotlinIconProps> = memo(props => {
  return <LanguageKotlinSvg {...props} />;
});
