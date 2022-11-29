import React, { FC, memo } from 'react';
import DeleteForeverSvg from '../svg/delete-forever.svg';

export interface IDeleteForeverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteForeverIcon: FC<IDeleteForeverIconProps> = memo(props => {
  return <DeleteForeverSvg {...props} />;
});
