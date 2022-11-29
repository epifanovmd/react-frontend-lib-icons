import React, { FC, memo } from 'react';
import FormatListTextSvg from '../svg/format-list-text.svg';

export interface IFormatListTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListTextIcon: FC<IFormatListTextIconProps> = memo(props => {
  return <FormatListTextSvg {...props} />;
});
