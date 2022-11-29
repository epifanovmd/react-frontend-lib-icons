import React, { FC, memo } from 'react';
import FormatQuoteOpenSvg from '../svg/format-quote-open.svg';

export interface IFormatQuoteOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatQuoteOpenIcon: FC<IFormatQuoteOpenIconProps> = memo(props => {
  return <FormatQuoteOpenSvg {...props} />;
});
