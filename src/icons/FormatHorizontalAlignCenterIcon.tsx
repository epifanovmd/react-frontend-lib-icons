import React, { FC, memo } from 'react';
import FormatHorizontalAlignCenterSvg from '../svg/format-horizontal-align-center.svg';

export interface IFormatHorizontalAlignCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatHorizontalAlignCenterIcon: FC<IFormatHorizontalAlignCenterIconProps> = memo(props => {
  return <FormatHorizontalAlignCenterSvg {...props} />;
});
