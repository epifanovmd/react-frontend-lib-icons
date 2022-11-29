import React, { FC, memo } from 'react';
import AlertOctagonOutlineSvg from '../svg/alert-octagon-outline.svg';

export interface IAlertOctagonOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertOctagonOutlineIcon: FC<IAlertOctagonOutlineIconProps> = memo(props => {
  return <AlertOctagonOutlineSvg {...props} />;
});
