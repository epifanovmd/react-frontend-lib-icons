import React, { FC, memo } from 'react';
import LanguageTypescriptSvg from '../svg/language-typescript.svg';

export interface ILanguageTypescriptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageTypescriptIcon: FC<ILanguageTypescriptIconProps> = memo(props => {
  return <LanguageTypescriptSvg {...props} />;
});
