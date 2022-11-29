import React, { FC, memo } from 'react';
import FormatWrapTopBottomSvg from '../svg/format-wrap-top-bottom.svg';

export interface IFormatWrapTopBottomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatWrapTopBottomIcon: FC<IFormatWrapTopBottomIconProps> = memo(props => {
  return <FormatWrapTopBottomSvg {...props} />;
});
