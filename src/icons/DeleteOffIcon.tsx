import React, { FC, memo } from 'react';
import DeleteOffSvg from '../svg/delete-off.svg';

export interface IDeleteOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteOffIcon: FC<IDeleteOffIconProps> = memo(props => {
  return <DeleteOffSvg {...props} />;
});
