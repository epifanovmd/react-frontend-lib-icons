import React, { FC, memo } from 'react';
import FormatAlignCenterSvg from '../svg/format-align-center.svg';

export interface IFormatAlignCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatAlignCenterIcon: FC<IFormatAlignCenterIconProps> = memo(props => {
  return <FormatAlignCenterSvg {...props} />;
});
