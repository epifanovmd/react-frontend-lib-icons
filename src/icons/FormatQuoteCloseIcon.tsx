import React, { FC, memo } from 'react';
import FormatQuoteCloseSvg from '../svg/format-quote-close.svg';

export interface IFormatQuoteCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatQuoteCloseIcon: FC<IFormatQuoteCloseIconProps> = memo(props => {
  return <FormatQuoteCloseSvg {...props} />;
});
