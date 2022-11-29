import React, { FC, memo } from 'react';
import LanguageCppSvg from '../svg/language-cpp.svg';

export interface ILanguageCppIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageCppIcon: FC<ILanguageCppIconProps> = memo(props => {
  return <LanguageCppSvg {...props} />;
});
