import React, { FC, memo } from 'react';
import FormatLetterMatchesSvg from '../svg/format-letter-matches.svg';

export interface IFormatLetterMatchesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterMatchesIcon: FC<IFormatLetterMatchesIconProps> = memo(props => {
  return <FormatLetterMatchesSvg {...props} />;
});
