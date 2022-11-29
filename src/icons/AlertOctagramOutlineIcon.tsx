import React, { FC, memo } from 'react';
import AlertOctagramOutlineSvg from '../svg/alert-octagram-outline.svg';

export interface IAlertOctagramOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertOctagramOutlineIcon: FC<IAlertOctagramOutlineIconProps> = memo(props => {
  return <AlertOctagramOutlineSvg {...props} />;
});
