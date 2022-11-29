import React, { FC, memo } from 'react';
import FormatLetterCaseSvg from '../svg/format-letter-case.svg';

export interface IFormatLetterCaseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterCaseIcon: FC<IFormatLetterCaseIconProps> = memo(props => {
  return <FormatLetterCaseSvg {...props} />;
});
