import React, { FC, memo } from 'react';
import FormatTextRotationVerticalSvg from '../svg/format-text-rotation-vertical.svg';

export interface IFormatTextRotationVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationVerticalIcon: FC<IFormatTextRotationVerticalIconProps> = memo(props => {
  return <FormatTextRotationVerticalSvg {...props} />;
});
