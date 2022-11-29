import React, { FC, memo } from 'react';
import FormatParagraphSvg from '../svg/format-paragraph.svg';

export interface IFormatParagraphIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatParagraphIcon: FC<IFormatParagraphIconProps> = memo(props => {
  return <FormatParagraphSvg {...props} />;
});
