import React, { FC, memo } from 'react';
import DeleteOffOutlineSvg from '../svg/delete-off-outline.svg';

export interface IDeleteOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteOffOutlineIcon: FC<IDeleteOffOutlineIconProps> = memo(props => {
  return <DeleteOffOutlineSvg {...props} />;
});
