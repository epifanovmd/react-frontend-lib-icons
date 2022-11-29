import React, { FC, memo } from 'react';
import FormatLetterStartsWithSvg from '../svg/format-letter-starts-with.svg';

export interface IFormatLetterStartsWithIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterStartsWithIcon: FC<IFormatLetterStartsWithIconProps> = memo(props => {
  return <FormatLetterStartsWithSvg {...props} />;
});
