import React, { FC, memo } from 'react';
import FormatTextRotationUpSvg from '../svg/format-text-rotation-up.svg';

export interface IFormatTextRotationUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationUpIcon: FC<IFormatTextRotationUpIconProps> = memo(props => {
  return <FormatTextRotationUpSvg {...props} />;
});
