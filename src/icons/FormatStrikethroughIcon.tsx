import React, { FC, memo } from 'react';
import FormatStrikethroughSvg from '../svg/format-strikethrough.svg';

export interface IFormatStrikethroughIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatStrikethroughIcon: FC<IFormatStrikethroughIconProps> = memo(props => {
  return <FormatStrikethroughSvg {...props} />;
});
