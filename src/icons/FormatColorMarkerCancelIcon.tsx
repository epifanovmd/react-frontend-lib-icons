import React, { FC, memo } from 'react';
import FormatColorMarkerCancelSvg from '../svg/format-color-marker-cancel.svg';

export interface IFormatColorMarkerCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatColorMarkerCancelIcon: FC<IFormatColorMarkerCancelIconProps> = memo(props => {
  return <FormatColorMarkerCancelSvg {...props} />;
});
