import React, { FC, memo } from 'react';
import FormatAlignBottomSvg from '../svg/format-align-bottom.svg';

export interface IFormatAlignBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignBottomIcon: FC<IFormatAlignBottomIconProps> = memo(props => {
  return <FormatAlignBottomSvg {...props} />;
});
