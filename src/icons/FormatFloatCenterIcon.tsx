import React, { FC, memo } from 'react';
import FormatFloatCenterSvg from '../svg/format-float-center.svg';

export interface IFormatFloatCenterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatFloatCenterIcon: FC<IFormatFloatCenterIconProps> = memo(props => {
  return <FormatFloatCenterSvg {...props} />;
});
