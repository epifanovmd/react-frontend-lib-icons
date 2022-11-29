import React, { FC, memo } from 'react';
import FormatTextRotationAngleUpSvg from '../svg/format-text-rotation-angle-up.svg';

export interface IFormatTextRotationAngleUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationAngleUpIcon: FC<IFormatTextRotationAngleUpIconProps> = memo(props => {
  return <FormatTextRotationAngleUpSvg {...props} />;
});
