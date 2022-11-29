import React, { FC, memo } from 'react';
import LanguageLuaSvg from '../svg/language-lua.svg';

export interface ILanguageLuaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageLuaIcon: FC<ILanguageLuaIconProps> = memo(props => {
  return <LanguageLuaSvg {...props} />;
});
