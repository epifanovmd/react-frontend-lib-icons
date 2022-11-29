import React, { FC, memo } from 'react';
import FormatLetterSpacingSvg from '../svg/format-letter-spacing.svg';

export interface IFormatLetterSpacingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatLetterSpacingIcon: FC<IFormatLetterSpacingIconProps> = memo(props => {
  return <FormatLetterSpacingSvg {...props} />;
});
