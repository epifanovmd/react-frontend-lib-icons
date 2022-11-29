import React, { FC, memo } from 'react';
import FormatVerticalAlignCenterSvg from '../svg/format-vertical-align-center.svg';

export interface IFormatVerticalAlignCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatVerticalAlignCenterIcon: FC<IFormatVerticalAlignCenterIconProps> = memo(props => {
  return <FormatVerticalAlignCenterSvg {...props} />;
});
