import React, { FC, memo } from 'react';
import AlertRemoveSvg from '../svg/alert-remove.svg';

export interface IAlertRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertRemoveIcon: FC<IAlertRemoveIconProps> = memo(props => {
  return <AlertRemoveSvg {...props} />;
});
