import React, { FC, memo } from 'react';
import LanguageHaskellSvg from '../svg/language-haskell.svg';

export interface ILanguageHaskellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageHaskellIcon: FC<ILanguageHaskellIconProps> = memo(props => {
  return <LanguageHaskellSvg {...props} />;
});
