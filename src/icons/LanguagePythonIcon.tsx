import React, { FC, memo } from 'react';
import LanguagePythonSvg from '../svg/language-python.svg';

export interface ILanguagePythonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguagePythonIcon: FC<ILanguagePythonIconProps> = memo(props => {
  return <LanguagePythonSvg {...props} />;
});
