import React, { FC, memo } from 'react';
import DeleteOutlineSvg from '../svg/delete-outline.svg';

export interface IDeleteOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeleteOutlineIcon: FC<IDeleteOutlineIconProps> = memo(props => {
  return <DeleteOutlineSvg {...props} />;
});
