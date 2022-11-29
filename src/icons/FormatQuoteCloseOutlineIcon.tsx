import React, { FC, memo } from 'react';
import FormatQuoteCloseOutlineSvg from '../svg/format-quote-close-outline.svg';

export interface IFormatQuoteCloseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatQuoteCloseOutlineIcon: FC<IFormatQuoteCloseOutlineIconProps> = memo(props => {
  return <FormatQuoteCloseOutlineSvg {...props} />;
});
