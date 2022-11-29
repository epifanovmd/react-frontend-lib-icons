import React, { FC, memo } from 'react';
import FormatVerticalAlignBottomSvg from '../svg/format-vertical-align-bottom.svg';

export interface IFormatVerticalAlignBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatVerticalAlignBottomIcon: FC<IFormatVerticalAlignBottomIconProps> = memo(props => {
  return <FormatVerticalAlignBottomSvg {...props} />;
});
