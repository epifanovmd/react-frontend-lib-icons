import React, { FC, memo } from 'react';
import MarkerCancelSvg from '../svg/marker-cancel.svg';

export interface IMarkerCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MarkerCancelIcon: FC<IMarkerCancelIconProps> = memo(props => {
  return <MarkerCancelSvg {...props} />;
});
