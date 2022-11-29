import React, { FC, memo } from 'react';
import FormatWrapInlineSvg from '../svg/format-wrap-inline.svg';

export interface IFormatWrapInlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatWrapInlineIcon: FC<IFormatWrapInlineIconProps> = memo(props => {
  return <FormatWrapInlineSvg {...props} />;
});
