import React, { FC, memo } from 'react';
import FormatParagraphSpacingSvg from '../svg/format-paragraph-spacing.svg';

export interface IFormatParagraphSpacingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatParagraphSpacingIcon: FC<IFormatParagraphSpacingIconProps> = memo(props => {
  return <FormatParagraphSpacingSvg {...props} />;
});
