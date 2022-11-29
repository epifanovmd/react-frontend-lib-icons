import React, { FC, memo } from 'react';
import FormatSizeSvg from '../svg/format-size.svg';

export interface IFormatSizeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatSizeIcon: FC<IFormatSizeIconProps> = memo(props => {
  return <FormatSizeSvg {...props} />;
});
