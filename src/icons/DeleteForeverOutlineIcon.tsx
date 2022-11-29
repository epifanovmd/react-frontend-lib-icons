import React, { FC, memo } from 'react';
import DeleteForeverOutlineSvg from '../svg/delete-forever-outline.svg';

export interface IDeleteForeverOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteForeverOutlineIcon: FC<IDeleteForeverOutlineIconProps> = memo(props => {
  return <DeleteForeverOutlineSvg {...props} />;
});
