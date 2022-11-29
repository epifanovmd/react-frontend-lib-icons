import React, { FC, memo } from 'react';
import FormatLetterCaseUpperSvg from '../svg/format-letter-case-upper.svg';

export interface IFormatLetterCaseUpperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterCaseUpperIcon: FC<IFormatLetterCaseUpperIconProps> = memo(props => {
  return <FormatLetterCaseUpperSvg {...props} />;
});
