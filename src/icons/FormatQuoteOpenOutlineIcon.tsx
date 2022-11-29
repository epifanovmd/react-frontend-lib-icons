import React, { FC, memo } from 'react';
import FormatQuoteOpenOutlineSvg from '../svg/format-quote-open-outline.svg';

export interface IFormatQuoteOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatQuoteOpenOutlineIcon: FC<IFormatQuoteOpenOutlineIconProps> = memo(props => {
  return <FormatQuoteOpenOutlineSvg {...props} />;
});
