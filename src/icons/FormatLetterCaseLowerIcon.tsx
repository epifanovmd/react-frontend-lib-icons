import React, { FC, memo } from 'react';
import FormatLetterCaseLowerSvg from '../svg/format-letter-case-lower.svg';

export interface IFormatLetterCaseLowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterCaseLowerIcon: FC<IFormatLetterCaseLowerIconProps> = memo(props => {
  return <FormatLetterCaseLowerSvg {...props} />;
});
