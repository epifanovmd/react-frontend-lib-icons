import React, { FC, memo } from 'react';
import RegexSvg from '../svg/regex.svg';

export interface IRegexIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RegexIcon: FC<IRegexIconProps> = memo(props => {
  return <RegexSvg {...props} />;
});
