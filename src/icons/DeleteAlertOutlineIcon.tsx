import React, { FC, memo } from 'react';
import DeleteAlertOutlineSvg from '../svg/delete-alert-outline.svg';

export interface IDeleteAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteAlertOutlineIcon: FC<IDeleteAlertOutlineIconProps> = memo(props => {
  return <DeleteAlertOutlineSvg {...props} />;
});
