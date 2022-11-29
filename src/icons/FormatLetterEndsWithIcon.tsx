import React, { FC, memo } from 'react';
import FormatLetterEndsWithSvg from '../svg/format-letter-ends-with.svg';

export interface IFormatLetterEndsWithIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterEndsWithIcon: FC<IFormatLetterEndsWithIconProps> = memo(props => {
  return <FormatLetterEndsWithSvg {...props} />;
});
