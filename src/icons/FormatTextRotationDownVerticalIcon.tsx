import React, { FC, memo } from 'react';
import FormatTextRotationDownVerticalSvg from '../svg/format-text-rotation-down-vertical.svg';

export interface IFormatTextRotationDownVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationDownVerticalIcon: FC<IFormatTextRotationDownVerticalIconProps> = memo(props => {
  return <FormatTextRotationDownVerticalSvg {...props} />;
});
