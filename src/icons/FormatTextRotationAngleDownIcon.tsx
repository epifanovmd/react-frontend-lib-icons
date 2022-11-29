import React, { FC, memo } from 'react';
import FormatTextRotationAngleDownSvg from '../svg/format-text-rotation-angle-down.svg';

export interface IFormatTextRotationAngleDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationAngleDownIcon: FC<IFormatTextRotationAngleDownIconProps> = memo(props => {
  return <FormatTextRotationAngleDownSvg {...props} />;
});
