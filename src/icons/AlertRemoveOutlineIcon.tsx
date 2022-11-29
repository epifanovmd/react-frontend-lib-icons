import React, { FC, memo } from 'react';
import AlertRemoveOutlineSvg from '../svg/alert-remove-outline.svg';

export interface IAlertRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertRemoveOutlineIcon: FC<IAlertRemoveOutlineIconProps> = memo(props => {
  return <AlertRemoveOutlineSvg {...props} />;
});
