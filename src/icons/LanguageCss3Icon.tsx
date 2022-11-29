import React, { FC, memo } from 'react';
import LanguageCss3Svg from '../svg/language-css3.svg';

export interface ILanguageCss3IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageCss3Icon: FC<ILanguageCss3IconProps> = memo(props => {
  return <LanguageCss3Svg {...props} />;
});
