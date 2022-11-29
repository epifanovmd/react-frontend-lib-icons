import React, { FC, memo } from 'react';
import FormatPageSplitSvg from '../svg/format-page-split.svg';

export interface IFormatPageSplitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatPageSplitIcon: FC<IFormatPageSplitIconProps> = memo(props => {
  return <FormatPageSplitSvg {...props} />;
});
