import React, { FC, memo } from 'react';
import LanguagePhpSvg from '../svg/language-php.svg';

export interface ILanguagePhpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguagePhpIcon: FC<ILanguagePhpIconProps> = memo(props => {
  return <LanguagePhpSvg {...props} />;
});
