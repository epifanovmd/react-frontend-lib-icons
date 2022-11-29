import React, { FC, memo } from 'react';
import FormatTextRotationNoneSvg from '../svg/format-text-rotation-none.svg';

export interface IFormatTextRotationNoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatTextRotationNoneIcon: FC<IFormatTextRotationNoneIconProps> = memo(props => {
  return <FormatTextRotationNoneSvg {...props} />;
});
