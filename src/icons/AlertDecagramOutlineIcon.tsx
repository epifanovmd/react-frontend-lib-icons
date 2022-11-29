import React, { FC, memo } from 'react';
import AlertDecagramOutlineSvg from '../svg/alert-decagram-outline.svg';

export interface IAlertDecagramOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertDecagramOutlineIcon: FC<IAlertDecagramOutlineIconProps> = memo(props => {
  return <AlertDecagramOutlineSvg {...props} />;
});
