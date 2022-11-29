import React, { FC, memo } from 'react';
import FormatTextRotationDownSvg from '../svg/format-text-rotation-down.svg';

export interface IFormatTextRotationDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationDownIcon: FC<IFormatTextRotationDownIconProps> = memo(props => {
  return <FormatTextRotationDownSvg {...props} />;
});
