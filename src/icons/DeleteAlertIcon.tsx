import React, { FC, memo } from 'react';
import DeleteAlertSvg from '../svg/delete-alert.svg';

export interface IDeleteAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteAlertIcon: FC<IDeleteAlertIconProps> = memo(props => {
  return <DeleteAlertSvg {...props} />;
});
